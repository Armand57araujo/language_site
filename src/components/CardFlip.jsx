import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import './CardFlip.css'; // Custom CSS for card flip animation if needed

const CardFlip = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <Card className={`card ${isFlipped ? 'is-flipped' : ''}`} onClick={handleCardFlip}>
            <div className="card-inner">
              <div className="card-front bg-primary text-white">
                <Card.Body>
                  {/* Front side content */}
                  <Card.Title>Front Side</Card.Title>
                  <Card.Text>Front side content goes here.</Card.Text>
                </Card.Body>
              </div>
              <div className="card-back bg-secondary text-white">
                <Card.Body>
                  {/* Back side content */}
                  <Card.Title>Back Side</Card.Title>
                  <Card.Text>Back side content goes here.</Card.Text>
                </Card.Body>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CardFlip;
