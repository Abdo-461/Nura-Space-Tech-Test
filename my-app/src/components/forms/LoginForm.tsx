import React from 'react';

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  } as React.CSSProperties,
  box: {
    background: '#ffffff',
    border: '1px solid #ddd',
    borderRadius: 8,
    padding: '32px 24px',
    boxShadow: '0 2px 8px rgba(81,56,238,0.08)',
    minWidth: 320,
    textAlign: 'center' as const,
  },
  title: {
    color: '#5138ee',
    fontSize: 24,
    fontWeight: 700,
    marginBottom: 8,
  },
  prompt: {
    color: '#333',
    fontSize: 14,
    marginBottom: 24,
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 1,
    width: '100%',
    marginBottom: 0,
  },
  input: {
    padding: '10px 12px',
    marginBottom: 16,
    border: '1px solid #ccc',
    borderRadius: 4,
    fontSize: 15,
  },
  button: {
    width: '100%',
    padding: '10px 0px',
    background: '#5138ee',
    color: '#fff',
    border: 'none',
    borderRadius: 4,
    fontWeight: 600,
    fontSize: 16,
    cursor: 'pointer',
  },
};

export default function LoginForm() {
  return (
    <div style={styles.container}>
      <form style={styles.box}>
        <div style={styles.title}>Sign In</div>
        <div style={styles.prompt}>Please enter your email and password to continue.</div>
        <div style={styles.formGroup}>
          <input
            type="email"
            placeholder="Email"
            style={styles.input}
            required
          />
          <input
            type="password"
            placeholder="Password"
            style={styles.input}
            required
          />
          <button type="submit" style={styles.button}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}