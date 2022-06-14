import './App.css';
import React from 'react'
import { Header } from './components/Header';
import { Skills } from './components/Skills';
import { Workspace } from './components/Workspace'
import { Contact } from './components/Contact';

function App() {
  return (
    <>
      <Header></Header>
      <Skills></Skills>
      <Workspace title="workspace" description="APIのRequest/Responseを確認する。"></Workspace>
      <Contact></Contact>
    </>
  );
}

export default App;
