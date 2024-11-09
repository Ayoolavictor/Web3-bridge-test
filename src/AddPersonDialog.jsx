// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

// eslint-disable-next-line react/prop-types
const AddPersonDialog = ({ onClose, onAdd }) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('Developer');
  const [skillSet, setSkillSet] = useState('Smart Contract Development');
  const [gender, setGender] = useState('Male'); // New gender state

  const handleAdd = () => {
    if (name.trim() === '') {
      alert('Please enter a name.');
      return;
    }

    // Create person object with gender
    const person = { name, role, skillSet, gender };
    onAdd(person);
  };

  return (
    <div className="dialog">
      <h3>Add Person</h3>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Role:
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="Facilitator">Facilitator</option>
          <option value="Developer">Developer</option>
        </select>
      </label>
      <label>
        Skill Set:
        <select value={skillSet} onChange={(e) => setSkillSet(e.target.value)}>
          <option value="Smart Contract Development">Smart Contract Development</option>
          <option value="Frontend Development">Frontend Development</option>
          <option value="Server-side Architecture">Server-side Architecture</option>
        </select>
      </label>
      <label>
        Gender:
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </label>
      <button onClick={handleAdd}>Add</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default AddPersonDialog;
