// src/components/Projects.jsx

import React from 'react';
import './Projects.css'; // For custom hover effects

const Projects = () => {
  return (
    <div id="projects" className="projects-section">
      <h3 className="projects-title"><i>React Projects</i></h3>
      <div className="row">
        {/* Project 1 */}
        <div className="col-md-6 mb-4">
          <div className="card project-card">
        <img src="/images/homepage.png" className="card-img-top" alt="Car Price Prediction" />
            <div className="card-body">
              <h5 className="card-title">Car Price Prediction</h5>
              <p className="card-text">
                A machine learning-powered React app that predicts the price of second-hand cars using user input and trained data models.
              </p>
              <a href="https://your-react-project-1-link.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                View Project
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="col-md-6 mb-4">
          <div className="card project-card">
            <img src="/project2-thumbnail.jpg" className="card-img-top" alt="Task Manager App" />
            <div className="card-body">
              <h5 className="card-title">Task Manager App</h5>
              <p className="card-text">
                A React-based To-Do app with modern UI that supports task creation, filtering, and persistence using localStorage.
              </p>
              <a href="https://your-react-project-2-link.com" target="_blank" rel="noopener noreferrer" className="btn btn-success">
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
