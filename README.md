# Catering Reservation and Ordering System

## Overview
This project is a web-based application for managing catering reservations and orders. It allows users to browse the menu, place orders, and manage reservations. Admins can add, list, and update food items, as well as manage orders and user authentication.

## Features
- User authentication (login and registration)
- Admin dashboard for managing food items and orders
- Image upload for food items
- Real-time order status updates
- Responsive design

## Technologies Used
- **Frontend**: React, React Router
- **Backend**: Express, Node.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Styling**: Tailwind CSS
- **Notifications**: React Toastify

## Installation

### Prerequisites
- Node.js
- MongoDB

### Steps
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/catering-reservation-system.git
    cd catering-reservation-system
    ```

2. Install dependencies for both frontend and backend:
    ```bash
    # Install backend dependencies
    cd backend
    npm install

    # Install frontend dependencies
    cd ../frontend
    npm install
    ```

3. Set up environment variables:
    - Create a `.env` file in the `backend` directory and add the following:
        ```env
        MONGO_URI=your_mongodb_connection_string
        JWT_SECRET=your_jwt_secret
        ```

4. Start the development server:
    ```bash
    # Start backend server
    cd backend
    npm run dev

    # Start frontend server
    cd ../frontend
    npm start

    # Start admin server
    cd ../admin
    npm start
    ```

5. Open your browser and navigate to `http://localhost:3000`.

## Usage
- **Admin**: Log in to access the admin dashboard where you can add, list, and update food items, and manage orders.
- **User**: Browse the menu, place orders, and manage your reservations.


