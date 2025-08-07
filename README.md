# 📬 Contact Us Web Application (MERN Stack)

A full-stack web application built using the **MERN stack (MongoDB, Express.js, React, Node.js)** that allows users to submit their contact details (name, email, college, and message) and view all previously submitted contact entries in a user-friendly interface.

---

## 🚀 Features

- 📝 **Contact Form** for collecting user details
- 🧠 **Form Validation** to ensure all fields are properly filled
- 📦 **MongoDB Database** integration to securely store contact data
- 🔄 **REST API** built with Express.js to handle form submission and data retrieval
- 📄 **View Contacts Page** to list all submitted entries
- 🎨 **Styled with Tailwind CSS** for a responsive and clean UI
- 🔐 **.env support** for managing database credentials securely

---

## 🔧 Tech Stack

**Frontend:**
- React (with Vite)
- Tailwind CSS

**Backend:**
- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv

---

## 📁 Folder Structure

```
CONTACT_US/
├── frontend/       # React App with Tailwind
│   ├── src/
│   │   ├── components/
│   │   │   ├── ContactForm.jsx
│   │   │   └── ViewContacts.jsx
│   └── ...
├── backend/        # Express App
│   ├── models/
│   │   └── Contact.js
│   ├── routes/
│   │   └── contactRoutes.js
│   ├── controllers/
│   │   └── contactController.js
│   └── server.js
└── README.md
```

---

## 🌐 How It Works

1. **User fills the Contact Form** on the frontend.
2. **Data is sent via Axios** to the backend `/api/contact` POST endpoint.
3. **Backend validates and stores** the data in MongoDB.
4. **View Contacts Page** fetches all saved contact data from the backend.

---

## 🛠️ Installation & Usage

### Clone the Repository
```bash
git clone https://github.com/pani-03/CONTACT_US.git
cd CONTACT_US
```

### Setup Backend
```bash
cd backend
npm install
# Add your MongoDB URI to .env file
npm run dev
```

### Setup Frontend
```bash
cd frontend
npm install
npm run dev
```

The frontend will run on `http://localhost:5173` and backend on `http://localhost:5000`

---

## 📌 What You’ll See

- ✅ Real-time form submission and confirmation
- ✅ Successfully saved contacts stored in MongoDB
- ✅ Simple and neat user interface
- ✅ View all contact entries on a separate page

---

## 📽️ Demo
> A video walkthrough or screen recording can be added here (if available)

---

## 💡 Future Enhancements
- Add pagination or search in View Contacts
- Include success and error toasts
- Admin login to manage submissions
- Export contacts as CSV or Excel

---

## 👨‍💻 Author
**Subham Pani**  
[GitHub Profile](https://github.com/pani-03)

---

## 📃 License
This project is for learning/demo purposes and open for extension.

---

Thank you for checking it out! 🙌
