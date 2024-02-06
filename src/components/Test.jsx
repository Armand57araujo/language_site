import React from 'react';

const Test = ({ title, question }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{question}</p>
      {/* Add button for completing test */}
    </div>
  );
};

export default Test;
