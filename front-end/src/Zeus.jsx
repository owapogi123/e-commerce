import loginBg from './assets/login-or-signin-bgi.png';
import logo from './assets/logo.png';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Zeus from './Zeus'; // Import Zeus component
import HomePage from './HomePage'; // Import HomePage component (or whatever your homepage component is)
import './style.css';

const styles = {
  container: {
    width: '100%',
    height: '100vh',
    backgroundImage: `url(${loginBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center bottom',
    position: 'relative',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(128, 128, 128, 0.4)',
  },
  gradientOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(140deg, rgba(0, 0, 0, 0) 50%, #b6b6b7 50%)',
  },
  formContainer: {
    zIndex: '999',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '150px',
  },
  logo: {
    width: '200px',
    height: '200px',
    backgroundImage: `url(${logo})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    filter: 'drop-shadow(0px 0px 10px rgba(255, 255, 255, 1))',
  },
  form: {
    width: '450px',
    height: '450px',
    backgroundColor: '#1b1f2e',
    borderRadius: '40px',
    boxShadow: '30px -30px 0px rgba(27, 31, 46,0.5)',
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '12px',
    backgroundColor: 'white',
    borderRadius: '20px',
    color: 'black',
    fontSize: '16px',
    marginBottom: '20px',
  },
  passwordToggle: {
    cursor: 'pointer',
    fontSize: '18px',
    color: '#ccc',
  },
};

export function LoginComponent() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [showHomePage, setShowHomePage] = useState(false);
  const [showZeusComponent, setShowZeusComponent] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleLoginClick = () => {
    setShowHomePage(true);
  };

  const handleSignInClick = () => {
    setShowZeusComponent(true);
  };

  return (
    <>
      <div style={styles.container}>
        <div style={styles.overlay} />
        <div style={styles.gradientOverlay} />
        <div style={styles.formContainer}>
          <div style={styles.logo}></div>
          <div style={styles.form}>
            <h2 style={{ color: 'white', marginBottom: '20px', fontFamily: 'sans-serif', fontWeight: '900' }}>
              SIGN UP
            </h2>
            <input
              type="text"
              id="Name"
              placeholder="Name"
              style={styles.input}
            />
            <input
              type="Email"
              id="Email"
              placeholder="Email"
              style={styles.input}
            />
            <div style={{ position: 'relative', marginBottom: '20px' }}>
              <input
                type={passwordVisible ? 'text' : 'password'}
                id="Password"
                placeholder="Password"
                style={styles.input}
              />
              <span onClick={togglePasswordVisibility} style={styles.passwordToggle}>
                {passwordVisible ? '...hide' : '...unhide'}
              </span>
            </div>
            <Button
              variant="contained"
              style={{ marginBottom: '20px' }}
              onClick={handleLoginClick}
            >
              REGISTER
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginComponent;
