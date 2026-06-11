import React from 'react';
import styles from './About.module.css';

const stats = [
  { num: 'BITS', desc: 'College — Software Engineering' },
  { num: '15+',  desc: 'Technologies & tools' },
  { num: '2-in-1', desc: 'Developer & Virtual Assistant' },
];

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <p className={styles.label}>About Me</p>
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.rule} />

        <p className={styles.subtitle}>
          I'm <strong>Martha Habtamu</strong>, Full Stack Developer / Virtual Assistant
        </p>

        <div className={styles.grid}>
          <div className={styles.statsCol}>
            {stats.map(s => (
              <div key={s.num} className={styles.statBox}>
                <div className={styles.statNum}>{s.num}</div>
                <div className={styles.statDesc}>{s.desc}</div>
              </div>
            ))}
            <div className={styles.chips}>
              <span className={styles.chip}>Software Engineer</span>
              <span className={styles.chip}>Virtual Assistant</span>
            </div>
          </div>

          <div className={styles.body}>
            <p>
              I am a Software Engineering student at BITS College with a strong focus on backend
              development, database systems, and scalable application design. I have hands-on
              experience with Python, Java, JavaScript, Ruby, MySQL, and web technologies including
              HTML and CSS. I am particularly interested in building efficient server-side systems
              and working with data-driven applications.
            </p>
            <p>
              Alongside my technical expertise, I work as a Virtual Assistant, where I support
              communication management, scheduling, client coordination, and administrative tasks.
              This role has strengthened my organizational abilities, attention to detail, and
              capacity to manage multiple responsibilities effectively in fast-paced environments.
            </p>
            <p>
              I am continuously developing my skills through academic learning and practical
              experience, with a goal of growing into a proficient backend or full-stack developer.
              I am also open to opportunities in virtual assistance where I can contribute my
              communication and organizational strengths.
            </p>
            <p>
              I welcome connections, collaborations, and opportunities where I can add value and
              further develop my expertise. Please feel free to reach out if you believe I could be
              a fit for your team or project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
