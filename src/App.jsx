// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Bedroom from './Bedroom';

const App = () => {
  // Define initial room data with constraints
  const [rooms, setRooms] = useState(Array(6).fill([])); // 6 rooms with initially empty arrays

  // Handle adding a person to a room
  const addPersonToRoom = (roomIndex, person) => {
    const room = rooms[roomIndex];

    // Check if the room already has a facilitator
    const hasFacilitator = room.some((p) => p.role === 'Facilitator');
    if (person.role === 'Facilitator' && hasFacilitator) {
      alert('Room already has a facilitator.');
      return;
    }

    // Check if the room is full
    if (room.length >= 4) {
      alert('Room is at full capacity.');
      return;
    }

    // Check for skill set constraints
    const skillCount = room.filter((p) => p.skillSet === person.skillSet).length;
    if (skillCount >= 2) {
      alert(`Cannot have more than 2 developers with ${person.skillSet} skill set.`);
      return;
    }

    // Add person to the room if all conditions are met
    const updatedRooms = [...rooms];
    updatedRooms[roomIndex] = [...room, person];
    setRooms(updatedRooms);
  };

  return (
    <div>
      <h1>Room Allocation System</h1>
      <div className="room-list">
        {rooms.map((room, index) => (
          <Bedroom
            key={index}
            roomIndex={index}
            occupants={room}
            addPersonToRoom={addPersonToRoom}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
