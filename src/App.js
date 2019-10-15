import "./App.css";
import React from "react";
import { Header } from "./components/Header";
import { SocialMedia } from "./components/SocialMedia";
import { Paragraph } from "./components/Paragraph";

function App() {
  return (
    <main className="main">
      <Header />
      <section>
        <Paragraph>
          Hola! My name is Raul, I'm based in San Francisco, CA, but I have
          lived and worked in Mexico in the past.
        </Paragraph>
        <Paragraph>
          I'm passionate about new web technologies and how web development
          moves so fast to address all the different problems that come every
          day. Currently, I'm working with a lot of cool technologies like
          React, Redux, Typescript, Python and Go.
        </Paragraph>
        <Paragraph>
          BTW, <b>I'm open for small/medium projects</b> so if you have an
          interesting project, hit me up! happy to help :)
        </Paragraph>
      </section>
      <footer>
        <SocialMedia />
      </footer>
    </main>
  );
}

export default App;
