import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import LanguageLearningSite from './LanguageLearningSite';


function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <Container>
      <h1>Welcome to Language Learning App</h1>
      <Row>
        <Col>
          <h2>Select a Language</h2>
          <Button variant="primary" onClick={() => selectLanguage('Spanish')}>Spanish</Button>{' '}
          <Button variant="primary" onClick={() => selectLanguage('French')}>French</Button>{' '}
          <Button variant="primary" onClick={() => selectLanguage('German')}>German</Button>{' '}
        </Col>
      </Row>
      {selectedLanguage && (
        <Row>
          <Col>
            <h2>{selectedLanguage} Lessons</h2>
            <LanguageLearningSite selectedLanguage={selectedLanguage} />
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default App;
