// src/components/Hobbies.js

import React from 'react';
import './Hobbies.css';

const hobbies = [
  {
    name: "Reading",
    description: "Exploring different genres of books and expanding knowledge."
  },
  {
    name: "Traveling",
    description: "Visiting new places, experiencing different cultures, and meeting new people."
  },
  {
    name: "Cooking",
    description: "Experimenting with new recipes and creating delicious meals."
  },
  {
    name: "Gardening",
    description: "Growing plants and flowers and enjoying time outdoors."
  },
  {
    name: "Photography",
    description: "Capturing moments and creating beautiful images."
  },
  {
    name: "Drawing",
    description: "Expressing creativity through sketches and illustrations."
  },
  {
    name: "Music",
    description: "Listening to music and playing musical instruments."
  },
  {
    name: "Hiking",
    description: "Exploring nature trails and enjoying the outdoors."
  },
  {
    name: "Gaming",
    description: "Playing video games and exploring virtual worlds."
  },
  {
    name: "Writing",
    description: "Crafting stories, articles, and other written content."
  }
];

const Hobbies = () => {
  return (
    <div className="hobbies-container">
      <h1>My Hobbies</h1>
      <table className="hobbies-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {hobbies.map((hobby, index) => (
            <tr key={index}>
              <td>{hobby.name}</td>
              <td>{hobby.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Hobbies;
