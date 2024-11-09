/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import AddPersonDialog from './AddPersonDialog';

const Bedroom = ({ roomIndex, occupants, addPersonToRoom }) => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [roomGender, setRoomGender] = useState(null); // Store room gender after first occupant

  // Handle adding a person with gender validation
  const handleAddPerson = (person) => {
    // Check if room has been assigned a gender
    if (roomGender && person.gender !== roomGender) {
      alert(`This room is restricted to ${roomGender.toLowerCase()} occupants only.`);
      return;
    }

    // Assign room gender if it's the first occupant
    if (!roomGender) {
      setRoomGender(person.gender);
    }

    addPersonToRoom(roomIndex, person);
  };

  return (
    <div className={`bedroom ${roomGender === 'Male' ? 'male' : roomGender === 'Female' ? 'female' : ''}`}>
      <h2>Bedroom {roomIndex + 1} - {roomGender ? `${roomGender} Only` : 'Unassigned'}</h2>
      <ul>
        {occupants.map((occupant, idx) => (
          <li key={idx}>{occupant.name} - {occupant.role} ({occupant.skillSet}) - {occupant.gender}</li>
        ))}
      </ul>
      <button onClick={() => setDialogOpen(true)}>Add Person</button>
      {isDialogOpen && (
        <AddPersonDialog
          onClose={() => setDialogOpen(false)}
          onAdd={(person) => {
            handleAddPerson(person);
            setDialogOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default Bedroom;
