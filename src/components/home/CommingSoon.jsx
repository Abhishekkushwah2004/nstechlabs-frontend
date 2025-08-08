import React from 'react';
import { useLocation } from 'react-router-dom';
import BannerSection from '../BannerSection';

export default function ComingSoon() {
  const location = useLocation();
  const pageName = location.state?.pageName || 'This Section';

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle email submission here
    alert('Thanks for your interest! We’ll notify you when it’s live.');
  };

  return (
    <>
      <BannerSection
        img="https://res.cloudinary.com/djiuh3gic/image/upload/v1754409248/Banner-Section_wcdc7j.png"
        title={`${pageName} - 🚧 Coming Soon`}
        subtitle="We're working hard to bring something amazing. Stay tuned!"
      />

      <div style={styles.wrapper}>
        <h2 style={styles.heading}>This section is under development</h2>
        <p style={styles.paragraph}>
          Our team is building something awesome. In the meantime, drop your email and we'll notify you when it's live.
        </p>

        <form style={styles.form} onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Notify Me</button>
        </form>
      </div>
    </>
  );
}

const styles = {
  wrapper: {
    padding: '50px 20px',
    textAlign: 'center',
    backgroundColor: '#f8f9fa',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '12px',
    color: '#0F0F57',
  },
  paragraph: {
    fontSize: '16px',
    marginBottom: '24px',
    color: '#555',
    maxWidth: '500px',
    margin: '0 auto',
  },
  form: {
    display: 'flex',
    justifyContent: 'center',
    gap: '12px',
    flexWrap: 'wrap',
  },
  input: {
    padding: '10px 14px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    minWidth: '260px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#0F0F57',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};