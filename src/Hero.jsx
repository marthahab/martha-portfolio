import React from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.bgLines} aria-hidden="true">
        {[150, 350, 550].map(y => (
          <div key={y} className={styles.hLine} style={{ top: y }} />
        ))}
        {[300, 700, 1050].map(x => (
          <div key={x} className={styles.vLine} style={{ left: x }} />
        ))}
      </div>

      <div className={styles.inner}>
        <div className={styles.content}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            Software Engineer &amp; Virtual Assistant
          </div>
          <h1 className={styles.name}>
            Hi, My Name Is<br />
            <span className={styles.nameAccent}>Martha Habtamu</span>
          </h1>
          <div className={styles.roleBadge}>
            Full Stack Developer / Virtual Assistant
          </div>
          <p className={styles.desc}>
            Software engineering student at BITS College with hands-on experience in fullstsck
            development, database systems, and scalable application design — alongside a track
            record in virtual assistance and team coordination.
          </p>
          <div className={styles.btns}>
            <a href="#portfolio" className={styles.btnGold}>View Portfolio</a>
            <a href="#about" className={styles.btnOutline}>Learn More About Me</a>
          </div>
          <div className={styles.location}>
            <span className={styles.locationDot}>◉</span>
            Addis Ababa, Ethiopia
          </div>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <div className={styles.outerRing} />
          <div className={styles.avatarFrame}>
            <div className={styles.avatarInner}>MH</div>
          </div>
        </div>
      </div>
    </section>
  );
}
