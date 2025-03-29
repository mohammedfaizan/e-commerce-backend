# 🛒 E-commerce Store (MERN Stack)

This project is a simple E-commerce Store built using the MERN stack (MongoDB, Express.js, React, and Node.js). It allows users to manage a collection of orders with full CRUD (Create, Read, Update, Delete) functionality.

## 🚀 Features

- ✅ Create a new order (Add a new order to the store).
- ✅ Retrieve all orders (Fetch a list of all orders in the store).
- ✅ Update order status (Change an order's status: `pending`, `shipped`, `delivered`).
- ✅ Delete an order by ID (Remove a specific order from the database).

---

## 📌 Data Model

The Order Schema in Mongoose includes the following fields:

### **Order Model**

```json
{
  "userName": "JohnDoe",
  "items": [
    { "name": "Laptop", "price": 1200, "quantity": 1 },
    { "name": "Mouse", "price": 20, "quantity": 2 }
  ],
  "totalPrice": 1240,
  "status": "pending"
}
```

- **`userName`**: String (User placing the order)
- **`items`**: Array of objects (Each item contains `name`, `price`, and `quantity`)
- **`totalPrice`**: Number (Total cost of the order)
- **`status`**: String (Default: `pending`, Possible values: `pending`, `shipped`, `delivered`)

---

## 🌐 REST API Endpoints

| Method | Endpoint      | Description               |
| ------ | ------------- | ------------------------- |
| POST   | `/orders`     | Create a new order        |
| GET    | `/orders`     | Retrieve all orders       |
| PUT    | `/orders/:id` | Update order status by ID |
| DELETE | `/orders/:id` | Delete an order by ID     |

---

## 🛠 Implementation Details

1. **Backend Setup:**

   - Create a Node.js/Express server.
   - Connect to MongoDB using Mongoose.
   - Define the `Order` schema.
   - Implement CRUD operations in a controller file.

2. **Testing the API:**
   - Use **Postman** to test API endpoints.
   - Verify order creation, retrieval, updating, and deletion.

---

## 🚀 Getting Started

### 1️⃣ Install Dependencies

```sh
npm install
```

### 2️⃣ Start the Server

```sh
npm start
```

---

## 🔗 Example Request (Creating an Order)

```json
POST /orders
{
  "userName": "JohnDoe",
  "items": [
    { "name": "Laptop", "price": 1200, "quantity": 1 },
    { "name": "Mouse", "price": 20, "quantity": 2 }
  ],
  "totalPrice": 1240
}
```

---

## 📜 License

This project is open-source and free to use.
