# Notes App

## Overview
This is a full-stack Notes application that allows users to create, edit, delete, and manage notes efficiently. The frontend is built using **React + Vite**, the backend uses **Express.js**, and the database is **MongoDB**. The UI features interactive motion-enhanced cards for a smooth user experience.

## Features
- 📝 **Create Notes** – Add new notes easily.
- ✏️ **Edit Notes** – Update existing notes.
- ❌ **Delete Notes** – Remove notes when needed.
- 📋 **View Notes** – Display all stored notes interactively.
- 🎨 **Interactive UI** – Smooth animations for a better user experience.

## Tech Stack
### Frontend
- React.js
- Vite.js
- Tailwind CSS (or any styling method used)
- Framer Motion (for animations, if used)

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose ODM)

### Everything Bind using Docker

## Installation
### Prerequisites
Ensure you have the following installed:
- Node.js
- React
- Docker 

### Steps
1. **Clone the Repository:**
   ```sh
   git clone https://github.com/tejas-130704/docs.git
   cd docs
   ```

2. **Build and Run Containers:**
   ```sh
   docker-compose up --build
   ```

3. **Open Frontend**
 Open the frontend in your browser at `http://localhost:5173/` (default Vite port)

4. **Stop Containers:**
   ```sh
   docker-compose down
   ```

## Usage
- Use the **Add Note** button to create notes.
- Click the **Edit** button to update notes.
- Click the **Delete** button to remove notes.

## Video Overview
https://github.com/user-attachments/assets/da03a6e6-cd52-4d2a-85be-b6ba97929143

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

