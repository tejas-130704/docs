import express from "express";
import cors from "cors";
import mongoose from "mongoose";
// require("dotenv").config(); 
import dotenv from "dotenv";
dotenv.config();



const app = express()
app.use(express.json())
app.use(cors())

const PORT = 3000;


const MONGO_URI = process.env.MONGO_URI || "mongodb://admin:password@localhost:27017/userdb?authSource=admin";


// Format: mongodb://username:password@host:port/database

mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB successfully!"))
  .catch(err => console.error("❌ MongoDB connection error:", err));



// Define Schema for Hospitals
const NotesSchema = new mongoose.Schema({
  desc: String,
}, { collection: "Notes" }); // <-- Custom collection name

// // Create Model
const Notes = mongoose.model("Notes", NotesSchema);


app.get("/", (req, res) => {
    res.json("Hello World");
})
app.get("/db",async (req, res) => {
    const note = await Notes.find(); // to get all result
    return res.json(note)
})

app.post("/db/delete", async (req, res) => {
    const { Id } = req.body;

    if (!Id ) {
        return res.status(400).json({ error: 'Note ID are required' });
    }
    try {
        const deletedNote = await Notes.findByIdAndDelete(Id);
    
        if (!deletedNote) {
          console.log("Note not found");
          return res.json({ error: "Note not found" , "status": true });
        }
    
        console.log("Deleted Note:", deletedNote);
        return res.json({ message: "Note deleted successfully", "status": true });
      } catch (error) {
        console.error("Error deleting note:", error);
        return res.json({ error: "Error occurred: " + err, "status": false });
      }
})


app.post("/db/edit", async (req, res) => {
    const { Id, newDesc } = req.body;

    if (!Id || !newDesc) {
        return res.status(400).json({ error: 'Note ID and new description are required' });
    }
    try {
        const updatedNote = await Notes.findByIdAndUpdate(
          Id, 
          { desc: newDesc }, 
          { new: true } // This option returns the updated document
        );
    
        if (!updatedNote) {
          console.log("Note not found");
          return res.json({ error: "Note not found" , "status": true });
        }
    
        console.log("Updated Note:", updatedNote);
        return res.json({ message: "Note updated successfully", "status": true });

      } catch (error) {
        console.error("Error updating note:", error);
        return res.json({ error: "Error occurred: " + err, "status": false });
      }
})




app.post("/db", async (req, res) => {
    const { desc } = req.body;

    // Ensure desc is not empty before proceeding
    if (!desc) {
        return res.status(400).json({ error: 'Description is required' });
    }

    try {
        // Pass an object with `desc` field
        const newNotes = new Notes({ desc });
        await newNotes.save(); 
        console.log("Notes Saved Successfully!!");
        return res.json({ message: "Notes Saved Successfully!!", "status": true });

    } catch (error) {
        console.error("Error saving note:", error);
        return res.json({ error: "Error occurred: " + error, "status": false });
    }
});



app.listen(PORT, () => {
    console.log("Backend is running on http://localhost:" + PORT);
})