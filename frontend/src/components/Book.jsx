import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Book = ({ onClose }) => {
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (description.trim() === '') {
            setError('Please provide a description for the note');
            return;
        }

        try {
            setLoading(true);
            const result = await axios.post('http://localhost:3000/db', { desc: description });

            if (!result.data.status) {
                setError('Error: ' + result.data.error);
                setLoading(false);
                return;
            }

            setDescription('');
            setError('');
            setLoading(false);
            onClose(); // Close the form after successful submission
            navigate("/"); // Redirect to home or desired page
        } catch (err) {
            setError('Error adding note: ' + err.message);
            setLoading(false);
        }
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    return (
        <div className='w-full h-screen z-10 bg-zinc-800 bg-opacity-[0.7] fixed top-0 left-0 flex items-center justify-center'>
            <div className="bg-zinc-600 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg mx-auto bg-slate-600x rounded-lg shadow-xl p-7 bg-opacity-90">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-white text-2xl font-semibold hover:text-gray-200"
                >
                    &times;
                </button>

                <h1 className="text-3xl font-semibold text-center mb-6">Add a New Note</h1>

                {/* Form for adding notes */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="description" className="block text-xl font-medium text-gray-200 mb-5">Description</label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={handleDescriptionChange}
                            rows="4"
                            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your note here..."
                        />
                        {error && <p className="text-red-500 text-2xl">{error}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        disabled={loading}
                    >
                        {loading ? "Adding Note..." : "Add Note"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Book;
