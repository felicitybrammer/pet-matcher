import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons'
// import About from '../../pages/Creators';


function Footer() {

  const year = new Date().getFullYear();

  return (
    <footer className="footer d-flex link" style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <Link className="link" to="/about">
          <FontAwesomeIcon icon={faUsers} color="white" size='2x' />
        </Link>
      </div>

      <div>
        OkCreature &#169; {year}
      </div>

      <div className="footerIcons" style={{ display: 'flex', justifyContent: 'space-around' }}>
          <a className="social-list__link" href="https://github.com/felicitybrammer/pet-matcher" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} color="white" size='2x' />
          </a>
      </div>
    </footer>
  );
}

export default Footer;