import React, { useEffect, useState } from 'react'
import Navbar from './components/navbar/navbar'
import Hero from './components/hero/hero'
import About from './components/about/about'
import Services from './components/services/services'
import Contact from './components/contact/contact'
import Projects, { ProjectDetail } from './components/projects/projects'
import { getProjectBySlug } from './projectData'

const readProjectSlug = () => {
  const match = window.location.hash.match(/^#project\/([a-z0-9-]+)$/)
  const slug = match?.[1]
  return slug && getProjectBySlug(slug) ? slug : null
}

const App = () => {
  const [projectSlug, setProjectSlug] = useState(readProjectSlug)
  const project = projectSlug ? getProjectBySlug(projectSlug) : null

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#main-content') return
      setProjectSlug(readProjectSlug())
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    let frameId
    if (project) {
      window.scrollTo({ top: 0, behavior: 'auto' })
      frameId = requestAnimationFrame(() => document.getElementById('project-detail-heading')?.focus({ preventScroll: true }))
      return () => cancelAnimationFrame(frameId)
    }

    const hash = window.location.hash.slice(1)
    if (!hash || hash.startsWith('project/')) return undefined
    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
    frameId = requestAnimationFrame(() => document.getElementById(hash)?.scrollIntoView({ behavior, block: 'start' }))
    return () => cancelAnimationFrame(frameId)
  }, [projectSlug])

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion || !('IntersectionObserver' in window)) return undefined

    document.documentElement.classList.add('motion-ready')
    const targets = document.querySelectorAll('.about-section, .about-achievements, .role-card, .info-card, .project-item, .project-detail__section, .project-detail__media, .contact-section')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })

    targets.forEach((target) => {
      target.classList.add('reveal-item')
      observer.observe(target)
    })

    return () => {
      observer.disconnect()
      document.documentElement.classList.remove('motion-ready')
    }
  }, [projectSlug])

  return (
    <div>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content">
        {project ? (
          <ProjectDetail project={project} />
        ) : (
          <>
            <Hero />
            <About />
            <Services />
            <Projects />
          </>
        )}
        <Contact />
      </main>
    </div>
  )
}

export default App
