import React from 'react';
import Chapter from './Chapter';

const LanguageLearningSite = ({ selectedLanguage }) => {
  // Simulated lesson and test data for demonstration
  const lessons = [
    { id: 1, title: 'Lesson 1', content: 'Lesson content for Spanish' },
    { id: 2, title: 'Lesson 2', content: 'Lesson content for Spanish' },
    { id: 3, title: 'Lesson 3', content: 'Lesson content for Spanish' }
  ];
  const test = { id: 1, title: 'Test 1', question: 'Test question for Spanish' };

  return (
    <div>
      <Chapter
        selectedLanguage={selectedLanguage}
        lessons={lessons}
        test={test}
      />
    </div>
  );
};

export default LanguageLearningSite;
