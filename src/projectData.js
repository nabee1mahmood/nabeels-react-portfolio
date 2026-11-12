import demoVideo from './assets/NLPDiscordBotRecording-Czv9kqf6.mp4';
import groupPhoto from './assets/20251022_140140-CIMlv4MA-CIMlv4MA.jpg';
import uafsPhoto from './assets/IMG_2573-IMWrsYrr-IMWrsYrr.jpg';
import numa from './assets/numa2-C_T9BqRh.jpg';
import couchdb from './assets/CouchDB Recording-D36ypzUP.mp4';
import lionorder from './assets/LionOrderRecording.mp4';
import senior from './assets/Senior Transportation Demo Video.mp4';

export const projects = [
  {
    slug: 'senior-transportation',
    number: '01',
    title: 'Senior Transportation Awareness Prediction System',
    type: 'Machine learning · Full stack',
    summary: 'An end-to-end machine learning project that predicts awareness of local transportation services from survey data.',
    outcome: 'Built a full workflow from data preparation and prediction through a web interface.',
    tags: ['Python', 'Random Forest', 'FastAPI', 'MongoDB', 'React', 'Docker'],
    media: 'video',
    src: senior,
    mediaLabel: 'Demo of the senior transportation awareness prediction system',
    details: [
      { heading: 'Project context', text: 'Developed an end-to-end machine learning system using survey data collected through a research grant from senior citizens in Fort Smith and nearby cities. The goal was to predict awareness of local transportation services.' },
      { heading: 'Data preparation', text: 'Cleaned and transformed survey responses by handling missing values, grouping free-text answers into structured categories, and applying one-hot encoding to create a model-ready dataset.' },
      { heading: 'Prediction model', text: 'Trained a Random Forest classifier to predict awareness (Aware / Not Aware), produce probability scores, and highlight features influencing each prediction.' },
      { heading: 'Application', text: 'Built a FastAPI backend with a /predict endpoint, stored responses and predictions in MongoDB, containerized the application with Docker, and created a React frontend for users to view predictions.' },
    ],
  },
  {
    slug: 'lionorder',
    number: '02',
    title: 'LionOrder – Distributed Full-Stack Ordering System',
    type: 'Distributed systems · Full stack',
    summary: 'A group project for a local farm where customers can customize salads, place orders, and review order history.',
    outcome: 'Designed a Docker-based microservice system with inventory constraints and separate service responsibilities.',
    tags: ['FastAPI', 'Docker', 'MySQL', 'MariaDB', 'REST APIs'],
    media: 'video',
    src: lionorder,
    mediaLabel: 'LionOrder ordering system demonstration',
    details: [
      { heading: 'Project context', text: 'Built an ordering system for a local farm. Customers can log in, customize salads, place orders, view order history, and see inventory constraints enforced by the system.' },
      { heading: 'System architecture', text: 'Containerized microservice architecture with Customer, Order, Inventory, and Warehouse services. Each service exposes RESTful APIs built with FastAPI and uses MySQL/MariaDB.' },
      { heading: 'Service communication', text: 'Services communicate over HTTP/JSON and support standard create, read, update, and delete operations.' },
      { heading: 'What I learned', text: 'Practiced Agile Scrum, API design, microservices, and Docker-based deployments in a production-like distributed system.' },
    ],
  },
  {
    slug: 'numa-robotics',
    number: '03',
    title: 'ATMAE National Robotics Competition · NUMA 2.0',
    type: 'Robotics · Embedded systems',
    summary: 'A competition robot integrating Raspberry Pi control, Arduino motor control, and custom hardware wiring.',
    outcome: '1st place in the field competition and 2nd place overall at the ATMAE 2025 National Robotics Competition.',
    tags: ['Python', 'Raspberry Pi', 'Arduino', 'UDP', 'I²C', 'GPIO'],
    media: 'image',
    src: numa,
    mediaLabel: 'NUMA 2.0 competition robot',
    relatedMedia: [
      { src: groupPhoto, alt: 'ATMAE 2025 robotics competition team', caption: 'ATMAE 2025 · Competition team' },
      { src: uafsPhoto, alt: 'University of Arkansas–Fort Smith robotics team', caption: 'UAFS Robotics Team' },
    ],
    details: [
      { heading: 'System overview', text: 'Built NUMA 2.0 around a Raspberry Pi Zero 2 W as the main controller, with an Arduino Nano RP2040 managing the motors.' },
      { heading: 'Control software', text: 'Developed a UDP server to process Xbox controller input and send motor and servo commands through I²C and GPIO. Used multithreaded servo control in Python.' },
      { heading: 'Hardware integration', text: 'Integrated the Raspberry Pi, Arduino, motor drivers, PWM servo hat, servos, and Li-Po battery system with a custom wiring layout and emergency stop switch.' },
      { heading: 'Competition results', text: 'The robot completed all field obstacles. The team placed 1st in the field competition and 2nd overall at the ATMAE 2025 National Robotics Competition.' },
    ],
  },
  {
    slug: 'couchdb-platform',
    number: '04',
    title: 'Offline-First Distributed NoSQL Data Platform',
    type: 'Distributed systems · Data',
    summary: 'A multi-node CouchDB platform designed for availability, horizontal scaling, and offline data synchronization.',
    outcome: 'Configured multi-master replication and PouchDB synchronization for continued access when offline.',
    tags: ['CouchDB', 'PouchDB', 'Docker', 'NGINX', 'openSUSE'],
    media: 'video',
    src: couchdb,
    mediaLabel: 'CouchDB distributed platform demonstration',
    details: [
      { heading: 'System overview', text: 'Implemented a distributed NoSQL database system using CouchDB on openSUSE Linux, with a multi-node cluster deployed via Docker. Configured an NGINX web server as a single access point.' },
      { heading: 'Data model and access', text: 'CouchDB stores data as JSON documents rather than traditional SQL tables. The application interacts with the database through HTTP-based REST API requests and standard CRUD operations.' },
      { heading: 'Availability and offline use', text: 'Used multi-master replication to keep data available if a node fails. Added PouchDB to support offline storage and synchronization.' },
    ],
  },
  {
    slug: 'nlp-discord-bot',
    number: '05',
    title: 'Probabilistic NLP Text Generation Discord Bot',
    type: 'Natural language processing',
    summary: 'A Discord bot that completes a user’s prompt with Shakespeare-inspired text using n-gram language models.',
    outcome: 'Implemented unigram, bigram, and trigram models with Laplace smoothing and trigram backoff.',
    tags: ['Python', 'NLP', 'N-grams', 'Probability', 'Discord'],
    media: 'video',
    src: demoVideo,
    mediaLabel: 'NLP Discord bot demonstration',
    details: [
      { heading: 'Dataset and preprocessing', text: 'Used the Shakespeare dataset supplied by the course. Tokenized text by splitting on spaces, converting to lowercase, and removing punctuation.' },
      { heading: 'Language model', text: 'Built unigram, bigram, and trigram frequency tables with dictionaries. Applied Laplace smoothing to bigram probabilities and used backoff for trigram predictions.' },
      { heading: 'Text generation', text: 'The bot generates 10 words to continue a user’s input using bigram and trigram models, then calculates the log probability of each generated sentence.' },
      { heading: 'Discord integration', text: 'Connected the model to a bot that listens for messages and responds with sentence completions in real time.' },
    ],
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
