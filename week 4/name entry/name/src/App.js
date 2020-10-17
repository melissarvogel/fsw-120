import React from 'react';

import './index.css';

import React, {Component} from "react"
 
const initialValue = [ ];
 
const addName = () => {
  const [value, setValue] = React.useState('');
  const [list, setList] = React.useState(initialValue);
 
  const handleChange = event => {
    setValue(event.target.value);
  };
 
  const handleSubmit = event => {
    if (value) {
      setList(list.concat(value));
    }
 
    setValue('');
 
    event.preventDefault();
  };
 
  return (
    <div>
      <ul>
        {name.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
 
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} placeholder= "First Name" />
        <button type="submit">Add Name</button>
      </form>
    </div>
  );
};
 
export default App
