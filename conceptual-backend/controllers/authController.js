import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'yourVeryStrongSecretKey123!@#';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1h';

export const signup = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: 'Username, email, and password are required.' });
    }

    const existingUserByEmail = await User.findOne({ email: email.toLowerCase() });
    if (existingUserByEmail) {
      return res.status(409).json({ message: 'Email already exists.' });
    }

    const existingUserByUsername = await User.findOne({ username: username.toLowerCase() });
    if (existingUserByUsername) {
      return res.status(409).json({ message: 'Username already exists.' });
    }
    
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username: username.toLowerCase(),
      email: email.toLowerCase(),
      password: hashedPassword,
      role: role || 'user', 
    });

    const savedUser = await newUser.save();

    const token = jwt.sign({ id: savedUser._id, role: savedUser.role }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

    res.status(201).json({ 
      message: 'User created successfully.',
      token,
      user: { id: savedUser._id, username: savedUser.username, email: savedUser.email, role: savedUser.role }
    });

  } catch (error) {
    console.error("Error in signup:", error);
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: 'Validation Error', errors: error.errors });
    }
    res.status(500).json({ message: 'Server error during signup.', error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required.' });
    }

    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials. User not found.' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials. Password incorrect.' });
    }

    const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

    res.status(200).json({
      message: 'Login successful.',
      token,
      user: { id: user._id, username: user.username, email: user.email, role: user.role }
    });

  } catch (error) {
    console.error("Error in login:", error);
    res.status(500).json({ message: 'Server error during login.', error: error.message });
  }
};

export const logout = async (req, res) => {
  try {
    res.status(200).json({ message: 'Logout successful. Please clear the token on the client-side.' });
  } catch (error) {
    console.error("Error in logout:", error);
    res.status(500).json({ message: 'Server error during logout.', error: error.message });
  }
};