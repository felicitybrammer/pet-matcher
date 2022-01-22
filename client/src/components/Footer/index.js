import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'; 

function Footer() {

    return (
        <footer>
          <ul>  
            <li class="social-list__item">
                  <FontAwesomeIcon icon={faGithub} />
                  <a class="social-list__link" href="https://github.com/maks-pixel">Makda Girmay</a>
                  <FontAwesomeIcon icon={faGithub} />
                  <a class="social-list__link" href="https://github.com/reza-mahmoudian">Reza Mahmoudian</a>
                  <FontAwesomeIcon icon={faGithub} />
                  <a class="social-list__link" href="https://github.com/rpanglia">Ravneet Panglia</a>
                  <FontAwesomeIcon icon={faGithub} />
                  <a class="social-list__link" href="https://github.com/mnijjar24">Michelle Nijjar</a>
                  <FontAwesomeIcon icon={faGithub} />
                  <a class="social-list__link" href="https://github.com/felicitybrammer">Felicity Brammer</a>
            </li>
             
         </ul>
        </footer>
    );
}

export default Footer;