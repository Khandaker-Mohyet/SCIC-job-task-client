# Task Management Application

## Short Description
A fully responsive Task Management Application where users can add, edit, delete, and reorder tasks using a drag-and-drop interface. Tasks are categorized into **To-Do**, **In Progress**, and **Done**, with real-time synchronization to maintain persistence in the database.

## Live Link
[Live Demo](https://scic-job-task-38a89.web.app)

## Dependencies
The project uses the following dependencies:
- **Frontend:**
  - React.js
  - TailwindCSS
  - React DnD (Drag and Drop)
  - Axios (For API requests)
  - React Router DOM
- **Backend:**
  - Node.js
  - Express.js
  - MongoDB (Mongoose for database interaction)
  - Cors
  - Dotenv

## Installation Steps
1. **Clone the repository**
   ```sh
   git clone https://github.com/your-repo/task-manager.git
   cd task-manager
   ```

2. **Install frontend dependencies**
   ```sh
   cd client
   npm install
   ```

3. **Install backend dependencies**
   ```sh
   cd ../server
   npm install
   ```

4. **Set up environment variables**
   - Create a `.env` file in the `server` directory and configure it with the required database and server settings.
   ```env
   MONGO_URI=your-mongodb-connection-string
   PORT=5000
   ```

5. **Start the development servers**
   - **Run backend server:**
     ```sh
     cd server
     npm start
     ```
   - **Run frontend server:**
     ```sh
     cd client
     npm start
     ```

6. **Access the app**
   Open `http://localhost:3000` in your browser.

## Technologies Used
### Frontend:
- React.js
- TailwindCSS
- React DnD
- Axios

### Backend:
- Node.js
- Express.js
- MongoDB

### Additional Features:
- Drag and Drop support
- Real-time updates
- Responsive UI for mobile & desktop

## Contribution
Feel free to fork and contribute! Create a pull request with improvements.

## License
MIT License
