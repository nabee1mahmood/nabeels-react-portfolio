import React from 'react';
import './projects.css';
import demoVideo from '../../assets/NLPDiscordBotRecording-Czv9kqf6.mp4';
import groupPhoto from '../../assets/20251022_140140-CIMlv4MA-CIMlv4MA.jpg';
import uafsPhoto from '../../assets/IMG_2573-IMWrsYrr-IMWrsYrr.jpg';
import numa from '../../assets/numa2-C_T9BqRh.jpg';
import couchdb from '../../assets/CouchDB Recording-D36ypzUP.mp4';
import lionorder from '../../assets/LionOrderRecording.mp4';

const Projects = () => {
  return (
    <div id="projects" className="projects">
      <div className="projects-title">
        <h1>Projects</h1>
      </div>

      <div className="projects-list">
        {/* NLP Discord Bot */}


        <section className="project-row">
          <div className="project-card">
            <h2>Natural Language Processing Discord Bot</h2>
            <p><strong>Key Features:</strong></p>
            <ul>
              <li><strong>Dataset:</strong> Used a Shakespeare dataset provided by the course as training data for the language model.</li>
              <br></br>
              <li><strong>Preprocessing:</strong> Text was tokenized by splitting on spaces, converting to lowercase, and removing punctuation for consistency.</li>
              <br></br>
              <li><strong>Language Model:</strong> Built unigram, bigram, and trigram frequency tables using dictionaries. Bigram probabilities were smoothed using Laplace smoothing, and trigram predictions used backoff when needed.</li>
              <br></br>
              <li><strong>Prediction:</strong> The bot generates 10 words to complete a user's input using both bigram and trigram models and calculates the log probability of each generated sentence.</li>
              <br></br>
              <li><strong>Bot Setup:</strong> The bot listens for messages and responds with sentence completions in real time.</li>
            </ul>
          </div>
          <div className="project-media">
            <video controls autoPlay loop muted className="project-video">
              <source src={demoVideo} type="video/mp4" />
              Your browser does not support the video tag.
             
            </video>
          </div>
        </section>

        <br></br>
        <br></br>
           <br></br>
        <br></br>


        {/* CouchDB Cluster */}
        <section className="project-row">
          <div className="project-card">
            <h2>Distributed CouchDB NoSQL Cluster</h2>
            <p><strong>Key Features:</strong></p>
            <ul>
              <li><strong>Introduction:</strong> Implemented a distributed NoSQL database system using CouchDB on openSUSE Linux with a multi-node cluster deployed via Docker, providing high availability and horizontal scalability. An NGINX web server was configured as a single access point.</li>
              <br></br>
              <li><strong>Data Model:</strong> CouchDB stores data as JSON documents rather than traditional SQL tables. Each document represents a record and can be updated independently.</li>
              <br></br>
              <li><strong>Access Model (CRUD Operations):</strong> The application interacts with CouchDB using HTTP-based REST API requests.</li>
              <br></br>
              <li><strong>Fault Tolerance & Scalability:</strong> Multi-master replication ensures data availability even if a node fails. PouchDB was used to support offline storage and synchronization.</li>
              <br></br>
            </ul>
          </div>
          <div className="project-media">
            <video controls autoPlay loop muted className="project-video">
              <source src={couchdb} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>


        <br></br>
        <br></br>
           <br></br>
        <br></br>


        {/* LionOrder */}
        <section className="project-row">
          <div className="project-card">
            <h2>LionOrder – Distributed Full-Stack Ordering System</h2>
            <p><strong>Key Features:</strong></p>
            <ul>
              <li><strong>Introduction:</strong> Group project for a local farm where customers log in, customize salads, and place orders. Users can view order history, and the system enforces inventory constraints.</li>
              <br></br>
              <li><strong>System Architecture:</strong> Containerized microservice architecture using Docker with Customer, Order, Inventory, and Warehouse services. Each service exposes RESTful APIs built with FastAPI and uses MySQL/MariaDB.</li>
              <br></br>
              <li><strong>APIs:</strong> Services communicate over HTTP/JSON and support standard CRUD operations.</li>

              <br></br>
              <li><strong>Result:</strong> Practiced Agile Scrum, API design, microservices, and Docker-based deployments for a production-like distributed system.</li>
              <br></br>
            </ul>
          </div>
          <div className="project-media">
            <video controls autoPlay loop muted className="project-video">
              <source src={lionorder} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>


        <br></br>
        <br></br>
           <br></br>
        <br></br>


        {/* Robotics*/}
        <section className="project-row">
          <div className="project-card">
            <h2>ATMAE National Robotics Competition</h2>
            <p><strong>Awards:</strong> 1st place in field competition for completing all obstacles and 2nd place overall at the ATMAE 2025 National Robotics Competition.</p>
            <p><strong>Key Steps:</strong></p>
            <ul>
              <li><strong>System Overview:</strong> NUMA 2.0's control system was built around a Raspberry Pi Zero 2 W as the main controller, with an Arduino Nano RP2040 managing motors.</li>
              <br></br>
              <li><strong>Software Functionality:</strong> Developed a UDP server to process Xbox controller input and send motor and servo commands via I2C and GPIO, using multithreaded servo control in Python.</li>
              <br></br>
              <li><strong>Hardware Integration:</strong> Integrated Raspberry Pi, Arduino, motor drivers, a PWM servo hat, servos, and a Li-Po battery system with a custom wiring layout and emergency stop switch.</li>
              <br></br>
              <li><strong>Results:</strong> Achieved 2nd place overall and 1st in field events with a robot that completed all obstacles other teams could not finish.</li>
              <br></br>
            </ul>
          </div>
          <div className="project-media">
<img src={numa} alt="NUMA 2.0 competition robot"  className="project-image" 
/>
          </div>
        </section>



        <br></br>
        <br></br>
           <br></br>
        <br></br>



        <section className="project-gallery">
          <div className="gallery-item">
            <img src={groupPhoto} alt="ATMAE competition group photo" />
          </div>
          <div className="gallery-item">
            <img src={uafsPhoto} alt="UAFS Robotics Team" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
