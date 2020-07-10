import React from 'react';
import './CodeTechStack.css';

const CodeTechStack = ({ JavaScript, backEnd, dataBase, testing, generic }) => {

  return (
    <div className="tech-container">
      <h3 className="tech-title">JavaScript</h3>
      {JavaScript.map((tech) => (
        <div className="tech-item">{tech}</div>
      ))}
      <h3 className="tech-title">Server Side Technologies</h3>
      {backEnd.map((tech) => (
        <div className="tech-item">{tech}</div>
      ))}
      <h3 className="tech-title">Data Base</h3>
      {dataBase.map((tech) => (
        <div className="tech-item">{tech}</div>
      ))}      <h3 className="tech-title">Testing Technologies</h3>
      {testing.map((tech) => (
        <div className="tech-item">{tech}</div>
      ))}
      <h3 className="tech-title">Other Technologies</h3>
      {generic.map((tech) => (
        <div className="tech-item">{tech}</div>
      ))}
    </div>
  )
};

export default CodeTechStack;