import './App.css';
import React from 'react'
import { Header } from './components/Header';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

function App() {
  return (
    <>
      <Header></Header>
      <Skills></Skills>
      <Contact></Contact>
    </>
  );
}

export default App;
