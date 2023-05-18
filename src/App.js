import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Quizzes from './pages/Quizzes';
import Listicles from './pages/Listicles';
import Pointless from './pages/Pointless';
import Profile from './pages/Profile';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/quizzes' element={<Quizzes />} />
        <Route path='/listicles' element={<Listicles />} />
        <Route path='/pointless' element={<Pointless />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
