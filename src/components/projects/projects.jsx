import React from 'react';
import './projects.css';
import { projects } from '../../projectData';

function ProjectPreview({ project }) {
  const href = `#project/${project.slug}`;

  return (
    <a className="project-preview" href={href} aria-label={`View ${project.title} project details`}>
      {project.media === 'video' ? (
        <video muted playsInline preload="metadata" aria-hidden="true" tabIndex={-1}>
          <source src={project.src} type="video/mp4" />
        </video>
      ) : (
        <img src={project.src} alt="" aria-hidden="true" loading="lazy" />
      )}
      <span className="project-preview__number">{project.number}</span>
      <span className="project-preview__open" aria-hidden="true">↗</span>
    </a>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project-item">
      <ProjectPreview project={project} />
      <div className="project-card">
        <p className="project-meta">{project.type}</p>
        <h2><a href={`#project/${project.slug}`}>{project.title}</a></h2>
        <p className="project-summary">{project.summary}</p>
        <ul className="project-tags" aria-label={`${project.title} technologies`}>
          {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
        <a className="project-detail-link" href={`#project/${project.slug}`}>View project details <span aria-hidden="true">→</span></a>
      </div>
    </article>
  );
}

export function ProjectDetail({ project }) {
  if (!project) return null;

  return (
    <article id="project-detail" className="project-detail" aria-labelledby="project-detail-heading">
      <div className="project-detail__topline">
        <a className="back-to-projects" href="#projects"><span aria-hidden="true">←</span> All projects</a>
        <span className="project-detail__number">PROJECT {project.number} / 05</span>
      </div>
      <header className="project-detail__header">
        <p className="project-detail__type">{project.type}</p>
        <h1 id="project-detail-heading" tabIndex={-1}>{project.title}</h1>
        <p className="project-detail__summary">{project.summary}</p>
        <ul className="project-tags" aria-label={`${project.title} technologies`}>
          {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
      </header>
      <div className="project-detail__media">
        {project.media === 'video' ? (
          <video controls playsInline preload="metadata" aria-label={project.mediaLabel}>
            <source src={project.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img src={project.src} alt={project.mediaLabel} />
        )}
      </div>
      <div className="project-detail__body">
        <section className="project-result" aria-label="Project outcome">
          <span className="project-result__label">Outcome</span>
          <p>{project.outcome}</p>
        </section>
        <div className="project-detail__sections">
          {project.details.map((section, index) => (
            <section className="project-detail__section" key={section.heading}>
              <span className="project-detail__section-number">0{index + 1}</span>
              <div>
                <h2>{section.heading}</h2>
                <p>{section.text}</p>
              </div>
            </section>
          ))}
        </div>
        {project.relatedMedia?.length > 0 && (
          <div className="project-detail__gallery" role="group" aria-label="Additional robotics competition photos">
            {project.relatedMedia.map((item) => (
              <figure key={item.alt}>
                <img src={item.src} alt={item.alt} loading="lazy" />
                <figcaption>{item.caption}</figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>
      <footer className="project-detail__footer">
        <p>Interested in the work?</p>
        <a href="#contact" className="project-detail-link">Get in touch <span aria-hidden="true">→</span></a>
        <a className="back-to-projects" href="#projects"><span aria-hidden="true">↑</span> Back to all projects</a>
      </footer>
    </article>
  );
}

const Projects = () => (
  <section id="projects" className="projects" aria-labelledby="projects-heading">
    <header className="projects-heading section-heading">
      <div>
        <p className="section-kicker">Projects <span>03 / 04</span></p>
        <h1 id="projects-heading">Selected work</h1>
      </div>
      <p className="projects-intro">A mix of software, data, and hardware projects. Open any project to see how it came together.</p>
    </header>
    <div className="projects-list">
      {projects.map((project) => <ProjectCard project={project} key={project.slug} />)}
    </div>
  </section>
);

export default Projects;
