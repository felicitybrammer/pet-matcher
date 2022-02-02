import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  const year = new Date().getFullYear();


  return (
    <footer className="footer d-flex link" style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>
        Thanks for visiting!
      </div>

      <div>
        <ul className="noBullet">
          <li class="social-list__item">
            <FontAwesomeIcon icon={faGithub} href="https://github.com/felicitybrammer/pet-matcher" />
            {/* <a class="social-list__link" href="https://github.com/felicitybrammer/pet-matcher">OkCreature</a> */}


            {/* <FontAwesomeIcon icon={faGithub} />
                  <a class="social-list__link" href="https://github.com/maks-pixel">Makda Girmay</a>
                  <FontAwesomeIcon icon={faGithub} />
                  <a class="social-list__link" href="https://github.com/reza-mahmoudian">Reza Mahmoudian</a>
                  <FontAwesomeIcon icon={faGithub} />
                  <a class="social-list__link" href="https://github.com/rpanglia">Ravneet Panglia</a>
                  <FontAwesomeIcon icon={faGithub} />
                  <a class="social-list__link" href="https://github.com/mnijjar24">Michelle Nijjar</a>
                  <FontAwesomeIcon icon={faGithub} />
                  <a class="social-list__link" href="https://github.com/felicitybrammer">Felicity Brammer</a> */}
          </li>
        </ul>
      </div>

      <div>
        OkCreature &#169; {year}
      </div>

    </footer>
  );
}

// style={{ display: 'flex', justifyContent: 'space-between' }}
export default Footer;