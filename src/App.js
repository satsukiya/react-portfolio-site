import logo from './logo.svg';
import './App.css';
//import Welcome from './sample';
import { Welcome, MorningCall, Profile } from './sample';
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
