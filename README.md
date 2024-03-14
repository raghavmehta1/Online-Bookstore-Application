# Online-Bookstore-Application
# Online Bookstore Application

This is an online bookstore application that allows users to browse, search, and purchase books. The application has both frontend and backend components, providing a seamless user experience.

## Backend

The backend is built using Node.js with TypeScript and uses SQLite as the database (via the sqlite3 library). The server creates all necessary database tables and handles all database operations.

### API Routes

- `GET /api/books`: Retrieves a list of all books.
- `GET /api/books/:id`: Retrieves details of a specific book by ID.
- `POST /api/books`: Creates a new book.
- `PUT /api/books/:id`: Updates an existing book by ID.
- `DELETE /api/books/:id`: Deletes a book by ID.
- `GET /api/categories`: Retrieves a list of all categories.
- `POST /api/orders`: Creates a new order.
- `GET /api/orders/:id`: Retrieves details of a specific order by ID.

## Frontend

The frontend is built using React 18 with TypeScript. It communicates with the backend API to fetch and display book data, handle user interactions, and manage the shopping cart.

## Database

The application uses SQLite as the database to store book and order information. The server creates the necessary tables and handles all database operations.

## Socket.io

Socket.io is not used in this application.

## Running the Application

To run the application, use the following command:

```
bun server/run.ts
```

This will start the server and make the application accessible at `http://localhost:8001`.
