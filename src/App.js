import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { SocialMedia } from "./components/SocialMedia";
import { Paragraph } from "./components/Paragraph";

function App() {
  return (
    <main className="main">
      <Header />
      <section>
        
        <Paragraph>Hello there!</Paragraph>
      </section>
      <footer>
        <SocialMedia />
      </footer>
    </main>
  );
}

export default App;
