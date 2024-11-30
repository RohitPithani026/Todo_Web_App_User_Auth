
# Todo Web App with User Authentication ✅🔒

A fully-functional Todo Web Application built with **Node.js** and **React**, integrated with **MongoDB** for storing user-specific todos. The app includes secure user authentication (sign up, login, logout) and personalized task management features. This app demonstrates how to implement a complete full-stack solution with user authentication.

## Features ✨

-   **User Authentication**
    
    -   Sign up, login, and logout functionality using **JWT**.
-   **Task Management**
    
    -   Create, read, update, and delete todos.
    -   Mark tasks as completed or pending.
-   **Responsive UI**
    
    -   A modern, user-friendly interface built with **React**.
-   **Data Validation**
    
    -   Secure input handling and validation using **Zod**.
-   **Persistent Data Storage**
    
    -   User data and todos are stored and retrieved from **MongoDB**.

## Installation & Setup 🛠️

Follow these steps to set up and run the application locally.

### 1. Clone the Repository

`git clone https://github.com/RohitPithani026/Todo_Web_App_User_Auth.git`
`cd Todo_Web_App_User_Auth` 

### 2. Set Up the Backend

1.  **Navigate to the `backend` directory**:

    `cd backend` 
    
2.  **Install dependencies**:

    `npm install` 
    
3.  **Configure the `.env` file**  
    Create a `.env` file in the `backend` directory and add the following environment variables:

    `MONGO_URI=<your-mongodb-connection-string>`
    `JWT_SECRET=<your-jwt-secret-key>` 
    
4.  **Start the Backend Server**  
    Run the backend server:

    `node index.js` 
    

### 3. Set Up the Frontend

1.  **Navigate to the `frontend` directory**:
 
    `cd frontend` 
    
2.  **Install dependencies**:

    `npm install` 
    
3.  **Start the Frontend Development Server**  
    Run the frontend server:

    `npm run dev` 
    

### 4. Access the Application

Open your browser and go to `http://localhost:3000` to use the Todo Web App.

----------

## Folder Structure 📂
```
`Todo_Web_App_User_Auth/
├── backend/                  # Backend API using Node.js
│   ├── controllers/          # Logic for handling routes (authentication, todo operations)
│   ├── middlewares/          # JWT and input validation middleware
│   ├── models/               # MongoDB models (User, Todo)
│   ├── routes/               # API routes (users, todos)
│   └── server.js             # Backend server entry point
├── frontend/                 # Frontend application built with React
│   ├── components/           # Reusable UI components
│   ├── pages/                # Application pages (Login, Register, Todos)
│   ├── App.js                # Main React component
│   └── index.js              # React entry point
├── README.md                 # Project documentation
├── package.json              # Project metadata and dependencies
└── .env                      # Environment variables for backend` 
```
----------

## Technologies Used 💻

### Frontend:

-   **React**  
    Dynamic user interface for managing todos.
    
-   **Axios**  
    For making HTTP requests to the backend API.
    

### Backend:

-   **Node.js**  
    Server-side JavaScript runtime environment.
    
-   **Express.js**  
    Framework for handling HTTP requests and routing.
    
-   **MongoDB**  
    NoSQL database for storing user data and todos.
    
-   **JWT (JSON Web Tokens)**  
    For secure user authentication.
    

### Validation:

-   **Zod**  
    Input validation and error handling for user data and todos.

----------

## Contribution Guidelines 🤝

We welcome contributions! To contribute:

1.  **Fork the repository**.
2.  **Create a feature branch**:

    `git checkout -b feature-name` 
    
3.  **Make your changes** and **commit**:

    `git commit -m "Add feature-name"` 
    
4.  **Push your changes** to your fork:
 
    `git push origin feature-name` 
    
5.  **Open a pull request**.

----------

## License 📜

This project is licensed under the MIT License.

----------

## Contact 📬

Feel free to reach out for any questions or suggestions:

-   **GitHub**: [RohitPithani026](https://github.com/RohitPithani026)
-   **Twitter**: [@rohitpithani13](https://x.com/rohitpithani13)
