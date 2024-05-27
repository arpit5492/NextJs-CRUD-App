# CRUD Application

This application is a CRUD (Create, Read, Update, Delete) system that allows you to manage personal details, including name, age, gender, status, and additional personal information. The application is built with Next.js for server-side rendering and React.js for client-side rendering. It uses Express.js for API development and MySQL for data storage.

## Features

- **Add Personal Details**: Capture and store name, age, gender, status, and personal details.
- **Update Personal Details**: Modify existing entries.
- **Delete Personal Details**: Remove entries from the database.
- **View Personal Details**: Retrieve and display stored entries.

## Technologies Used

- **Frontend**:
  - Next.js (Server-Side Rendering)
  - React.js (Client-Side Rendering)
- **Backend**:
  - Express.js (API Development)
- **Database**:
  - MySQL

## Getting Started

Follow these instructions to set up and run the application on your local machine.

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm (Node Package Manager)
- MySQL

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/arpit5492/NextJs-CRUD-App.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd /NextJs-CRUD-App
   ```

3. **Install dependencies for the backend:**

   ```bash
   cd /backend
   npm install
   ```

4. **Install dependencies for the frontend:**
   ```bash
   cd /frontend
   npm install
   ```

### Running the Application

#### Backend Server

1. **Start the backend server:**
   ```bash
   cd backend
   npm start
   ```
   The backend server can be accessed at: [http://localhost:4000](http://localhost:4000)

#### Frontend Server

1. **For development environment:**

   ```bash
   cd frontend
   npm run dev
   ```

   The frontend server can be accessed at: [http://localhost:3000](http://localhost:3000)

2. **For production environment:**
   ```bash
   cd frontend
   npm run build
   npm start
   ```
   The frontend server can be accessed at: [http://localhost:3000](http://localhost:3000)

## Configuration

Ensure that your MySQL database is set up and running. Update the database connection settings in the backend configuration file.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.
