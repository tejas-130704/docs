import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import Card from "./Card";
import Book from './Book';
import { useNavigate } from 'react-router-dom';

const Foreground = () => {
    const ref = useRef(null);
    const [notes, setNotes] = useState([]); // Initialize notes as an empty array.
    const [isAddingNote, setIsAddingNote] = useState(false); // State to toggle the Add Note form visibility
    const navigate = useNavigate();

    // Fetch all notes when component mounts
    useEffect(() => {
        const fetchAllNotes = async () => {
            try {
                const response = await axios.get('http://localhost:3000/db');
                setNotes(response.data); // Update notes state with fetched data.
            } catch (err) {
                console.log('Error fetching notes:', err);
            }
        };
        fetchAllNotes();
    }, [notes]); // Empty dependency array to ensure this runs only once.

    // Function to toggle the visibility of the "Add New Note" form
    const handleOpen = () => {
        setIsAddingNote(true);
    };

    // Function to close the "Add New Note" form
    const handleClose = () => {
        setIsAddingNote(false);
    };

    // Handle adding a new note
    const handleAddNote = async (newNote) => {
        try {
            const response = await axios.post('http://localhost:3000/db/add', newNote); // Adjust URL for your API
            if (response.data.success) {
                // Optionally, refetch the notes or update the state directly to avoid re-fetching
                setNotes((prevNotes) => [...prevNotes, newNote]);
                handleClose(); // Close the add note form after adding
            }
        } catch (err) {
            console.log('Error adding note:', err);
        }
    };

    return (
        <div ref={ref} className='w-full h-screen z-[4] absolute top-0 left-0 overflow-hidden flex flex-wrap'>
            {/* Button to open the Add Note form */}
            <button 
                onClick={handleOpen} 
                className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 h-10 absolute right-3 top-4"
            >
                Add Note
            </button>
            
            {/* Conditionally render the Book component for adding a note */}
            {isAddingNote && <Book onClose={handleClose} onAddNote={handleAddNote} />}

            {/* Display notes or a message if there are no notes */}
            {notes.length > 0 ? (
                notes.map((note, index) => (
                    <Card data={note.desc} key={index} index={note._id} reference={ref} />
                ))
            ) : (
                <p>No notes found.</p>
            )}
        </div>
    );
};

export default Foreground;
