# 📝Docs - Notes App

## 🚀 Overview
Welcome to the **Notes App**, a feature-rich full-stack application designed to help users create, edit, delete, and manage notes effortlessly! With a smooth and interactive UI, this app ensures a seamless user experience.

🔹 **Frontend:** Built with **React + Vite** for lightning-fast performance and a dynamic UI.  
🔹 **Backend:** Powered by **Express.js** and **MongoDB**, ensuring robust and scalable data management.  
🔹 **Deployment:** Easily containerized using **Docker**, making it super easy to set up and run anywhere.  

## 🌟 Features
✅ **Create Notes** – Add new notes in seconds.  
✅ **Edit Notes** – Modify your existing notes anytime.  
✅ **Delete Notes** – Remove notes when they are no longer needed.  
✅ **View Notes** – Display and organize notes with an interactive layout.  
✅ **User-Friendly UI** – Experience smooth animations and seamless interactions.  
✅ **Mobile Responsive** – Works perfectly across devices.  
✅ **Persistent Storage** – Notes are stored in MongoDB for future access.  
✅ **Dockerized Setup** – Hassle-free setup with `docker-compose`.  

## 🏗️ Tech Stack
### 📌 Frontend
- **React.js** – Fast and component-driven UI framework.  
- **Vite.js** – Next-gen frontend tooling for super-fast development.  
- **Tailwind CSS** – Modern styling with utility-first CSS.  
- **Framer Motion** – Smooth animations and enhanced UI interactions (if used).  

### ⚙️ Backend
- **Node.js** – Asynchronous event-driven runtime.  
- **Express.js** – Lightweight web framework for API handling.  
- **MongoDB** – NoSQL database for storing notes.  
- **Mongoose ODM** – Elegant MongoDB object modeling for Node.js.  

### 🐳 Docker (Containerized Setup)
- **Docker** – Containerized deployment for easy environment setup.  
- **Docker Compose** – Multi-container setup with one command.  

## 🛠️ Installation Guide
### ✅ Prerequisites
Make sure you have the following installed before running the app:
- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)

### 🚀 Getting Started
1️⃣ **Clone the Repository:**  
   ```sh
   git clone https://github.com/tejas-130704/docs.git
   cd docs
   ```

2️⃣ **Run with Docker:**  
   ```sh
   docker-compose up --build
   ```

3️⃣ **Access the Application:**  
   - 🌐 Open the frontend at: `http://localhost:5173/`
   - 🔗 Backend API runs on: `http://localhost:3000/`

4️⃣ **Stopping the Containers:**  
   ```sh
   docker-compose down
   ```

## 🔧 Manual Setup (Without Docker)
If you prefer running the app manually, follow these steps:

### 🚀 Backend Setup
```sh
cd backend
npm install
npm start
```

### 🎨 Frontend Setup
```sh
cd frontend
npm install
npm run dev
```

## 📂 Project Structure
```
📦 notes-app
 ┣ 📂 backend
 ┃ ┣ 📂 models         # Database models
 ┃ ┣ 📂 routes         # API routes
 ┃ ┣ 📜 server.js      # Express app
 ┃ ┗ 📜 Dockerfile     # Backend Docker setup
 ┣ 📂 frontend
 ┃ ┣ 📂 src            # React components
 ┃ ┣ 📜 App.jsx        # Main React app
 ┃ ┗ 📜 Dockerfile     # Frontend Docker setup
 ┣ 📜 docker-compose.yml  # Docker multi-container setup
 ┣ 📜 README.md         # Project documentation
```
--

## 📹 Video Overview
🎥 Watch a quick demo of the app in action:  

https://github.com/user-attachments/assets/da03a6e6-cd52-4d2a-85be-b6ba97929143


---

## 🛠️ Future Enhancements
🚀 **User Authentication** – Secure login & signup.  
🚀 **Dark Mode** – Switch between light and dark themes.  
🚀 **Cloud Sync** – Sync notes across multiple devices.  
🚀 **Drag & Drop** – Reorder notes with ease.  

## 🤝 Contributing
We welcome contributions! Feel free to **fork** the repo, make changes, and submit a **pull request**.
For major changes, please open an **issue** first to discuss your ideas.

## 📄 License
This project is licensed under the **MIT License** – you’re free to modify and distribute it.

Happy Coding! 🚀




