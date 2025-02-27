import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoIosClose } from "react-icons/io";

const EditForm = ({ prop, data, index, onFormSubmitSuccess }) => {
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');
    const [id, setId] = useState();

    // Initialize the form with data when the component mounts
    useEffect(() => {
        setDescription(data);
        setId(index);
    }, [data, index, prop]);

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (description.trim() === '') {
            setError('Please provide a description for the note');
            return;
        }

        try {
            const result = await axios.post('http://localhost:3000/db/edit', { newDesc: description, Id: id });

            if (!result.data.status) {
                setError('Error: ' + result.data.error);
                return;
            }

            // Clear form after successful submission
            setDescription('');
            setError('');

            // Call the parent callback to hide the form
            onFormSubmitSuccess();

        } catch (err) {
            console.error('Error adding note:', err);
            setError('An unexpected error occurred.');
        }
    };

    return (
        <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-scren bg-opacity-[0.7] z-20 ${prop}`}>
            <div className={`bg-zinc-600 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg mx-auto bg-slate-600x rounded-lg shadow-xl p-7`}>
                <div className="fw-full flex justify-between">
                    <h1 className="text-3xl font-semibold text-center mb-6">Edit Note</h1>
                    <IoIosClose size="30px" onClick={onFormSubmitSuccess} />
                </div>

                {/* Edit form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="description" className="block text-xl font-medium text-gray-200 mb-5">Description</label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            rows="4"
                            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your note here..."
                        />
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditForm;
