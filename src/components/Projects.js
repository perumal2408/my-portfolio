import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";

const projects = [
  {
    title: "THG Kids",
    description: "A fun and educational app for kids.",
    screenshots: ["https://via.placeholder.com/400x300?text=THG+Kids"],
  },
  {
    title: "Crossword App",
    description: "An interactive crossword puzzle app.",
    screenshots: ["https://via.placeholder.com/400x300?text=Crossword+App"],
  },
  {
    title: "E-paper App",
    description: "Designed the UI and implemented features in the E-paper app.",
    screenshots: ["https://via.placeholder.com/400x300?text=E-paper+App"],
  },
  {
    title: "THG Forms",
    description: "A form management system for THG.",
    screenshots: ["https://via.placeholder.com/400x300?text=THG+Forms"],
  },
  {
    title: "THG Food",
    description:
      "Developed a full-stack solution for managing the canteen food menu.",
    screenshots: ["https://via.placeholder.com/400x300?text=THG+Food"],
  },
  {
    title: "Productivity App",
    description: "An app to boost productivity and manage tasks.",
    screenshots: ["https://via.placeholder.com/400x300?text=Productivity+App"],
  },
];

function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  const handleCardClick = (index) => {
    setActiveProject(index);
  };

  const handleClose = () => {
    setActiveProject(null);
  };

  return (
    <div className="projects-grid-item" id="projects">
      <h2 className="section-title">
        Projects
      </h2>
      <div className="projects-carousel-container">
        <section className="portfolio-section">
          <ul>
            <div className="projects-carousel-content">
              {projects.concat(projects).map((project, index) => (
                <div
                  key={index}
                  className="projects-carousel-item"
                  onClick={() => handleCardClick(index % projects.length)}
                >
                  <div className="projects-card">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </ul>
        </section>
      </div>

      {activeProject !== null && (
        <Modal show={true} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{projects[activeProject].title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {projects[activeProject].screenshots.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Screenshot ${index + 1}`}
                style={{ width: "100%", marginBottom: "10px" }}
              />
            ))}
            <p>{projects[activeProject].description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap");
        #projects{
        background-color: black;}
        .projects-body {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          background-color: #f7f9fc;
          color: #333333;
          font-family: "Montserrat", sans-serif;
        }

        h2 {
          margin: 1.25rem;
          text-align: center;
        }

        footer {
          margin: 1.25rem 0;
          text-align: center;
        }

        .projects-grid-item {
        background-color: black;
          padding-block-end: 2.5rem;
          text-align: center;
          display: grid;
          justify-content: center;
          padding-top: 2rem;
          position: relative;
        }

        .projects-carousel-container {
          width: 100%;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .projects-carousel-content {
          display: flex;
          animation: scroll 50s linear infinite;
        }

        .projects-carousel-item {
          min-width: 250px;
          height: 200px;
          margin-right: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .projects-card {
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          padding: 20px;
          text-align: center;
          width: 330px;
          height: 150px;
        }

        .projects-card h3 {
          font-weight: bold;
          color: white;
          margin-bottom: 10px;
        }

        .projects-card p {
          color: #666666;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .portfolio-section {
          display: flex;
          width: 100%;
          height: 100%;
          max-width: 100%;
          max-height: 100%;
          place-items: center;
          margin: 0px;
          padding: 0px;
          list-style-type: none;
          opacity: 1;
          mask-image: linear-gradient(
            to right,
            rgba(0, 0, 0, 0) 0%,
            rgb(0, 0, 0) 12.5%,
            rgb(0, 0, 0) 87.5%,
            rgba(0, 0, 0, 0) 100%
          );
          overflow: hidden;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}

export default Projects;
