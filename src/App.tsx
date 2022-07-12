import React from 'react';
import './App.css'
import HeroSection from './components/Hero-Section';
import ProgramsComponent from './components/Program-Componenet';
import ReasonsComponent from './components/ReasonsComponent';

function App() {
  return (
    <div className='App'>
      <HeroSection />
      <ProgramsComponent />
      <ReasonsComponent />
    </div>
  );
}

export default App;
