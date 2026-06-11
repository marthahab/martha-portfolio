import React, { useState } from 'react';
import styles from './Portfolio.module.css';

const categories = ['All', 'Full Stack', 'Backend', 'Operations', 'Frontend'];

const projects = [
  {
    icon: '🛠',
    tag: 'Full Stack',
    title: 'Pharmalook',
    desc: 'A full-stack web application.This website helps people who want medicines.It finds the pharmacies where that medicine is belong.',
    tech: ['Python', 'javascript', 'css', 'sqllite'],
  },
  {
    icon: '📋',
    tag: 'fullstack',
    title: 'Almuni managment',
    desc: ' It is a platform that connects graduates with their institution and fellow alumni while managing alumni information, events, communications, and career opportunities.',
    tech: ['typescript', 'react', 'sqllite', 'python'],
  },
  {
    icon: '🌐',
    tag: 'E-commerce',
    title: 'Digital merkato',
    desc: 'It is a web-based platform that digitalizes the traditional marketplace of Merkato,connecting buyers and sellers in one centralized system.',
    tech: ['Nest.js', 'Next.js', 'Google Workspace'],
  },
  
];

export default function Portfolio() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? projects
    : projects.filter(p => p.tag === active);

  return (
    <section className={styles.portfolio} id="portfolio">
      <div className={styles.container}>
        <p className={styles.label}>Work</p>
        <h2 className={styles.title}>Portfolio</h2>
        <div className={styles.rule} />

        <div className={styles.catRow}>
          {categories.map(c => (
            <button
              key={c}
              className={`${styles.catBtn} ${active === c ? styles.catActive : ''}`}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filtered.map(p => (
            <div key={p.title} className={styles.card}>
              <div className={styles.cardTop}>
                <div className={styles.icon}>{p.icon}</div>
                <span className={styles.tag}>{p.tag}</span>
              </div>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardDesc}>{p.desc}</p>
              <div className={styles.techStack}>
                {p.tech.map(t => (
                  <span key={t} className={styles.pill}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
