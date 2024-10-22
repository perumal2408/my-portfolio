import React from 'react';
import AboutMe from '../src/components/AboutMe';
import ConnectMe from '../src/components/ConnectMe';
import Skills from '../src/components/Skills';
import Projects from '../src/components/Projects';
import Footer from '../src/components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <AboutMe />
      <Skills />
      <Projects />
      <ConnectMe />
      <Footer />
    </div>
  );
}

export default App;