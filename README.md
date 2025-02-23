# Discovery App

## Overview
Discovery App is a web application that allows users to explore and discover books based on various filters and criteria. The application consists of a React frontend with TypeScript for a responsive and user-friendly UI, and a Node.js backend for managing book data through a RESTful API.

## Features

### Backend (Node.js with PostgreSQL)
- RESTful API to manage book data (CRUD operations: Create, Read, Update, Delete).
- Data storage using PostgreSQL.
- API endpoints for:
  - Fetching book listings.
  - Fetching individual book details.
  - Handling filter and search requests.
  - Creating new book entries.
  - Updating book information.
  - Deleting book records.
- Authentication and authorization mechanisms for future user accounts.


## Technologies Used

### Backend:
- Node.js with Express.js
- PostgreSQL for data storage
- JWT (JSON Web Token) for authentication (if implemented)

## Setup Instructions

### Backend:
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up the database:
   - Ensure PostgreSQL is installed and running.
   - Create a database and configure environment variables.
4. Start the backend server:
   ```bash
   npm run dev
   ```

## Future Enhancements
- Implement user authentication and accounts.
- Allow users to rate and review books.
- Add recommendations based on user preferences.

