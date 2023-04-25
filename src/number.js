import React, { useState } from 'react';
function NumberDisplay() {
    const [number, setNumber] = useState(42); // Set the initial value to 42
    
    return (
      <div>
        <h1>The number is: {number}</h1>
      </div>
    );
  }
  
  export default NumberDisplay;
  