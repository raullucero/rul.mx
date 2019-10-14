import React from 'react';
import {Link} from './Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

export const SocialMedia = () => (
  <React.Fragment>
    <Link href="https://www.linkedin.com/in/raul-lucero" target="_blank">
      <FontAwesomeIcon icon={faLinkedinIn} size="2x"/>
    </Link>
    <Link href="https://github.com/raullucero" target="_blank">
      <FontAwesomeIcon icon={faGithub} size="2x"/>
    </Link>
    <Link href="mailto:null@rul.mx">
      <FontAwesomeIcon icon={faEnvelope} size="2x"/>
    </Link>
  </React.Fragment>
);
