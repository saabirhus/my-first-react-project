import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Projects from './components/Projects';
// import Hobbies from './components/Hobbies';
// import CV from './components/CV';
// import Contact from './components/Contact';
// import Blog from './components/Blog';
import './App.css';

function App (){
  return(
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />  */}
        </Routes>
      </div>
  );
}

export default App;
