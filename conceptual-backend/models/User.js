import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required.'],
    unique: true,
    trim: true,
    lowercase: true,
    minlength: [3, 'Username must be at least 3 characters long.'],
    maxlength: [30, 'Username cannot exceed 30 characters.'],
    match: [/^[a-zA-Z0-9_]+$/, 'Username can only contain alphanumeric characters and underscores.']
  },
  email: {
    type: String,
    required: [true, 'Email is required.'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, 'Please use a valid email address.']
  },
  password: {
    type: String,
    required: [true, 'Password is required.'],
    minlength: [6, 'Password must be at least 6 characters long.']
  },
  role: {
    type: String,
    enum: ['user', 'admin', 'editor'],
    default: 'user'
  },
  createdAt: {
    type: Date,
    default: Date.now,
    immutable: true
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

userSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

userSchema.pre('findOneAndUpdate', function(next) {
  this.set({ updatedAt: new Date() });
  next();
});

const User = mongoose.model('User', userSchema);

export default User;