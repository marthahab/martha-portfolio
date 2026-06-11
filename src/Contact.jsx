import React, { useState } from 'react';
import styles from './Contact.module.css';

const contactItems = [
  { icon: '✉', label: 'Email', value: 'marthahabtamu264@gmail.com' },
  { icon: '📍', label: 'Location', value: 'Addis Ababa, Ethiopia' },
  { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/martha-habtamu', href: 'https://linkedin.com/in/martha-habtamu' },
  { icon: '💻', label: 'GitHub', value: 'github.com/marthahab', href: 'https://github.com/marthahab' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <p className={styles.label}>Get In Touch</p>
        <h2 className={styles.title}>Contact Me</h2>
        <div className={styles.rule} />
        <div className={styles.grid}>
          <div>
            <p className={styles.intro}>
              Open to software engineering roles and virtual assistant opportunities.
              Let's have a conversation about what you need.
            </p>
            {contactItems.map(item => (
              <div key={item.label} className={styles.item}>
                <span className={styles.itemIcon}>{item.icon}</span>
                <div>
                   <div className={styles.itemLabel}>{item.label}</div>
                   {item.href ? (
                     <a
                       href={item.href}
                       target="_blank"
                       rel="noreferrer"
                       className={styles.itemLink}
                     >
                       {item.value}
                     </a>
                   ) : (
                     <div className={styles.itemVal}>{item.value}</div>
                   )}
                 </div>
              </div>
            ))}
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <div className={styles.group}>
                <label htmlFor="name">Name</label>
                <input
                  id="name" name="name" type="text"
                  placeholder="Your name"
                  value={form.name} onChange={handleChange} required
                />
              </div>
              <div className={styles.group}>
                <label htmlFor="email">Email</label>
                <input
                  id="email" name="email" type="email"
                  placeholder="your@email.com"
                  value={form.email} onChange={handleChange} required
                />
              </div>
            </div>
            <div className={styles.group}>
              <label htmlFor="subject">Subject</label>
              <input
                id="subject" name="subject" type="text"
                placeholder="What's this about?"
                value={form.subject} onChange={handleChange} required
              />
            </div>
            <div className={styles.group}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message" name="message"
                placeholder="Tell me about your project or opportunity..."
                value={form.message} onChange={handleChange} required
              />
            </div>
            <button type="submit" className={styles.submit}>
              {sent ? 'Message Sent ✓' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}