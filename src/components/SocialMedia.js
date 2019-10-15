import React, { useState } from "react";
import { Link } from "./Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

const getRandomNumber = max => {
  return Math.floor(Math.random() * Math.floor(max));
};

let interval;

export const SocialMedia = () => {
  const [number, setNumber] = useState(getRandomNumber(3));

  if (!interval) {
    interval = setInterval(() => {
      let newNumber = number;
      while (newNumber === number) {
        newNumber = getRandomNumber(3);
      }
      setNumber(newNumber);
    }, 5000);
  }

  return (
    <React.Fragment>
      <Link href="https://www.linkedin.com/in/raul-lucero" target="_blank">
        <FontAwesomeIcon
          className={`animated infinite ${number === 0 ? "tada" : "pulse"}`}
          icon={faLinkedinIn}
          size="2x"
        />
      </Link>
      <Link href="https://github.com/raullucero" target="_blank">
        <FontAwesomeIcon
          className={`animated infinite ${number === 1 ? "tada" : "pulse"}`}
          icon={faGithub}
          size="2x"
        />
      </Link>
      <Link href="mailto:null@rul.mx">
        <FontAwesomeIcon
          className={`animated infinite ${number === 2 ? "tada" : "pulse"}`}
          icon={faEnvelope}
          size="2x"
        />
      </Link>
    </React.Fragment>
  );
};
