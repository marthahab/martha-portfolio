import React, { useState } from 'react';
import styles from './Skills.module.css';

const tabs = [
  {
    id: 'tech',
    label: 'Technical',
    skills: [
      'Python', 'Java', 'JavaScript', 'Ruby',
      'NestJS', 'Next.js', 'Node.js',
      'HTML & CSS', 'MySQL', 'PostgreSQL', 'SQLite',
      'REST APIs', 'Full Stack Dev', 'Backend Systems',
    ],
  },
  {
    id: 'va',
    label: 'Virtual Assistant',
    skills: [
      'Task Coordination', 'Scheduling', 'Workflow Structuring',
      'Process Documentation', 'Written Communication',
      'Professional Messaging', 'Team Collaboration',
      'Client Coordination', 'Data Tracking',
      'Reporting & Summaries', 'Problem Solving',
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    skills: [
      'Google Docs', 'Google Sheets', 'Google Drive',
      'Notion', 'Trello', 'ChatGPT & AI Tools',
      'Productivity Suites',
    ],
  },
];

export default function Skills() {
  const [active, setActive] = useState('tech');
  const current = tabs.find(t => t.id === active);

  return (
    <section className={styles.skills} id="skills">
      <div className={styles.container}>
        <p className={styles.label}>Expertise</p>
        <h2 className={styles.title}>Skills</h2>
        <div className={styles.rule} />

        <div className={styles.tabs}>
          {tabs.map(t => (
            <button
              key={t.id}
              className={`${styles.tab} ${active === t.id ? styles.tabActive : ''}`}
              onClick={() => setActive(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {current.skills.map(sk => (
            <div key={sk} className={styles.chip}>
              <span className={styles.dot} aria-hidden="true">◆</span>
              {sk}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
