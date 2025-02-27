import React, { useState } from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";
import { IconContext } from "react-icons";
import axios from "axios";
import EditForm from "./EditForm";

const Card = ({ data, index, reference }) => {
  const [target, setTarget] = useState(index);
  const [error, setError] = useState("");
  const [editFormVisible, setEditFormVisible] = useState(false); // State to control form visibility

  // Handle edit button click
  const handleEdit = () => {
    setEditFormVisible((prev) => !prev); // Toggle visibility
  };
  console.log(target)
  // Handle delete button click
  const handleDelete = async () => {
    try {
      const response = await axios.post('http://localhost:3000/db/delete', { Id: target });

      if (!response.data.status) {
        setError('Error: ' + response.data.error);
        return;
      }
      setError('');
      return;
    } catch (e) {
      console.log("Error: " + e);
    }
  };

  return (
    <>
      {/* Conditionally render EditForm based on visibility */}
      <EditForm
        prop={editFormVisible ? "" : "hidden"} // Control visibility based on state
        data={data}
        index={index}
        onFormSubmitSuccess={() => setEditFormVisible(false)} // Callback to hide form on success
      />

      <motion.div
        drag
        dragConstraints={reference}
        className="w-44 h-60 bg-zinc-900 bg-opacity-[0.7] rounded-[19px] text-white py-4 px-5 relative overflow-hidden m-4"
      >
        <FaRegFileAlt size="19px" />
        <p className="text-sm mt-5">{data}</p>
        <footer className="footer absolute bottom-0 left-0 w-full ">
          <div className="bg-green-600 flex justify-between items-center px-8 py-3 w-full mt-2 h-16 bg-opacity-[0.5]">
            <IconContext.Provider value={{ className: "bg-blue-600 rounded-full w-[40px] h-[40px] p-2" }}>
              {/* Edit button to toggle visibility */}
              <MdEdit size="25px" onClick={handleEdit} />
              {/* Delete button to trigger deletion */}
              <IoIosClose size="25px" onClick={handleDelete} />
            </IconContext.Provider>
          </div>
        </footer>
      </motion.div>
    </>
  );
};

export default Card;
