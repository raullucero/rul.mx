import "./App.css";
import React, { useState } from "react";
import Typist from "react-typist";
import { Header } from "./components/Header";
import { DropboxIcon } from "./components/DropboxIcon";
import { SocialMedia } from "./components/SocialMedia";
import { Paragraph } from "./components/Paragraph";
import { SubTitle } from "./components/SubTitle";
import { SkipAnimation } from "./components/SkipAnimation";

function App() {
  const [headerTyped, setHeaderTyped] = useState(false);
  const [animationDone, setAnimationDone] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(30);

  const handleHeaderTyped = () => {
    setHeaderTyped(true);
  };

  const handleClickSkip = () => {
    setTypingSpeed(0);
    setHeaderTyped(true);
  };

  const handleBodyTyped = () => {
    setAnimationDone(true);
  };

  return (
    <main className="main">
      {!animationDone && <SkipAnimation onClick={handleClickSkip} />}
      <section>
        <Header />
        <Typist
          className="typist-container"
          avgTypingDelay={typingSpeed}
          startDelay={1000}
          onTypingDone={handleHeaderTyped}
        >
          <SubTitle>Front End / Fullstack Software Engineer @ Dropbox</SubTitle>
        </Typist>
        {headerTyped && <DropboxIcon />}
      </section>
      <section>
        {headerTyped && (
          <Typist
            avgTypingDelay={typingSpeed}
            startDelay={1000}
            onTypingDone={handleBodyTyped}
          >
            <Paragraph>
              Hola! My name is Raul, I'm based in San Francisco, CA, but I have
              lived and worked in Mexico in the past.
            </Paragraph>
            <Paragraph>
              I'm passionate about new web technologies and how web development
              moves so fast to address all the different problems that come
              every day. Currently, I'm working with a lot of cool technologies
              like React, Redux, Typescript, Python and Go.
            </Paragraph>
            <Paragraph>
              BTW, <b>I'm open for small/medium projects</b> so if you have an
              interesting project, hit me up! happy to help :)
            </Paragraph>
          </Typist>
        )}
      </section>
      <footer>
        <SocialMedia />
      </footer>
    </main>
  );
}

export default App;
