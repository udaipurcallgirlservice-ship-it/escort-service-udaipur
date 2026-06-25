# Conceptual Blog Backend API

This directory contains a conceptual Express.js and Mongoose backend for a blog application.

## Prerequisites

- Node.js (v14 or newer recommended)
- MongoDB (running instance)

## Setup

1.  **Clone/Copy Files**: Ensure all files from this `conceptual-backend` directory are in your chosen backend project folder.
2.  **Install Dependencies**:
    Navigate to this `conceptual-backend` directory in your terminal and run:
    ```bash
    npm install express mongoose cors body-parser dotenv 
    # For development (optional, but recommended)
    npm install --save-dev nodemon 
    ```
    (Note: `dotenv` is good practice if you use a `.env` file, though not strictly used in the current `server.js` for MONGO_URI directly without `dotenv.config()`)

3.  **Configure Environment Variables**:
    Create a `.env` file in this `conceptual-backend` directory by copying `.env.example`:
    ```bash
    cp .env.example .env
    ```
    Edit the `.env` file and set your `MONGO_URI`. For example:
    `MONGO_URI=mongodb://localhost:27017/yourBlogDatabaseName`

4.  **Update `package.json` (Main Project)**:
    The main `package.json` in the root of your Vite project has been updated with a conceptual script:
    ```json
    "scripts": {
      // ... other scripts
      "server:dev": "nodemon conceptual-backend/server.js"
    },
    ```
    And `nodemon` has been added to `devDependencies`.

## Running the Conceptual Backend

1.  **Ensure MongoDB is running.**
2.  From the **root** of your Vite project, you can try running:
    ```bash
    npm run server:dev
    ```
    This uses nodemon to run `conceptual-backend/server.js` and will restart the server on file changes within this directory.

    Alternatively, navigate directly into the `conceptual-backend` directory:
    ```bash
    cd conceptual-backend
    node server.js 
    # or if you installed nodemon globally or want to use npx
    # nodemon server.js 
    # npx nodemon server.js
    ```

The server should start, and you'll see a message like "Conceptual backend server running on port 5000" and "MongoDB Connected Successfully!".

## API Endpoints

-   `POST /api/blogs`: Create a new blog post.
    -   Body: `{ "title": "string", "content": "string", "slug": "optional-string", "featuredImageUrl": "optional-string-url", "metaTitle": "optional-string", "metaDescription": "optional-string", "tags": "optional-string-comma-separated or array" }`
-   `GET /api/blogs`: Get all blog posts.
-   `GET /api/blogs/:slug`: Get a single blog post by its slug.
-   `PUT /api/blogs/:slug`: Update a blog post by its slug.
    -   Body: Same as POST, fields are optional.
-   `DELETE /api/blogs/:slug`: Delete a blog post by its slug.

## Important Notes

-   **This is Conceptual**: This backend code is provided as a structural example. It cannot be run directly by the Hostinger Horizons frontend environment. You need to set up and run this in a separate Node.js hosting environment.
-   **Security**: This example includes basic validation. For a production application, you would need to implement more robust security measures, including more comprehensive input sanitization, authentication, authorization, rate limiting, etc.
-   **Error Handling**: Basic error handling is included. Production applications often require more sophisticated logging and error management.
-   **Database Connection**: The `MONGO_URI` in `server.js` is a placeholder. You **must** replace it with your actual MongoDB connection string, preferably using environment variables (as shown with `.env.example`).
-   **CORS**: CORS is enabled for all origins (`app.use(cors())`). In production, you should configure this more restrictively to only allow requests from your frontend's domain.

## Next Steps for Frontend Integration

Once this backend is running in its own environment:
1.  Your React frontend will make `fetch` requests to these API endpoints (e.g., `http://localhost:5000/api/blogs`).
2.  You'll need to manage state in your React components to display blog posts, handle forms for creating/editing posts, etc.
3.  Consider using a data fetching library or React Query for more advanced data management on the frontend.