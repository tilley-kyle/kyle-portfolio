import React from 'react';
import './CodeTechStack.css';

const CodeTechStack = ({ JavaScript, backEnd, dataBase, testing, generic }) => {

  return (
    <div className="tech-container">
      <h3 className="tech-title">JavaScript</h3>
        {JavaScript.map((tech) => (
          <div className="tech-item">{tech}</div>
        ))}
    </div>
  )
};

export default CodeTechStack;