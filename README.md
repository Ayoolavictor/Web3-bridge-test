# Room Allocation System

A web-based dynamic room allocation system designed for a developer training facility. This system allows facilitators to manage the assignment of team members to bedrooms, enforcing strict constraints on room capacity, skill distribution, and gender-based occupancy.

## Table of Contents

- [Features](#features)
- [Setup and Installation](#setup-and-installation)
- [How to Use](#how-to-use)
- [Technologies Used](#technologies-used)

## Features

1. **Dynamic Room Assignment**: Allocate individuals (facilitators and developers) to rooms based on specific rules.
2. **Capacity Constraints**: Each bedroom can hold up to 4 people, consisting of 1 facilitator and 3 developers.
3. **Skill Distribution Constraints**: No more than 2 developers with the same skill set are allowed in a room.
4. **Gender-Based Accommodation** (Optional): A room's gender is set by the first occupant and cannot be changed. Only occupants of the same gender are allowed subsequently.
5. **Error Handling**: Displays alerts if room capacity is exceeded or if the gender or skill constraints are violated.
6. **User-Friendly Interface**: Easily add, view, and manage room occupants with an intuitive layout.


## Setup and Installation

Follow these steps to set up and run the application locally.

### Prerequisites

- **Node.js** (version 12 or above) and **npm** should be installed. You can download them from [Node.js](https://nodejs.org/).

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Ayoolavictor/Web3-bridge-test.git
   cd Web3-bridge-test

2. **Install dependencies**:
   ```bash
   npm install
3. **Run the development server**:
   ```bash
   npm run dev
   

## Folder Structure

- `App.jsx`: Main component that initializes rooms and manages state across the app.
- `Bedroom.jsx`: Renders each bedroom's occupants and opens a dialog for adding a person.
- `AddPersonDialog.jsx`: Form for entering occupant details, with options for role, skill set, and gender.
- `App.css`: Styling for the entire app, including individual room styles based on gender.

## How to Use

1. **Add an Occupant**: Each room has an "Add Person" button, which opens a dialog.
2. **Enter Details**:
   - Name: Person’s name.
   - Role: Choose `Facilitator` or `Developer`.
   - Skill Set: Select a skill set (Smart Contract Development, Frontend Development, or Server-side Architecture).
   - Gender: Choose `Male` or `Female`.
3. **Room Constraints**:
   - **Facilitator Requirement**: Each room can have only one facilitator.
   - **Capacity Constraint**: A room cannot have more than 4 occupants.
   - **Skill Set Limit**: Only 2 developers with the same skill set are allowed in each room.
   - **Gender Restriction**: The room’s gender is determined by the first occupant. Subsequent additions must match this gender.

4. **Error Alerts**: The app will show an error if:
   - The room is at full capacity.
   - A facilitator is added to a room that already has one.
   - More than 2 developers with the same skill set are attempted to be added.
   - An occupant’s gender does not match the room’s gender.

5. **Visual Feedback**: Each room displays its assigned gender (e.g., "Male Only" or "Female Only") after the first occupant is added.


## Technologies Used

- **React**: For building the user interface and managing component-based state.
- **JavaScript (ES6+)**: Core programming language for handling application logic.
- **CSS**: For styling and layout.
- **HTML**: Used as a template for rendering the application.
- **Vite**: Used as a fast and optimized development server and build tool for React applications.

