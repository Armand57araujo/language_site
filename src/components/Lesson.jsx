import React from 'react';

const Lesson = ({ title, content }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      {/* Add button for completing lesson */}
    </div>
  );
};

export default Lesson;
