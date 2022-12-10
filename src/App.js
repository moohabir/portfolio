import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Footer from './components/Footer';
import SinglePost from './components/SinglePost';
//import './App.css';
import './style.css';

import { useContext } from 'react';
import { DarkModeContext } from './context/DarkModeContext';

import CssBaseline from '@mui/material/CssBaseline';

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    //<ThemeProvider Theme={darkTheme}>

    <Router>
      <CssBaseline />
      <div className={darkMode ? 'dark' : 'light'}>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/post/:slug"
            element={<SinglePost />}
          />
          <Route
            path="/blog"
            element={<Blog />}
          />

          <Route
            path="/skills"
            element={<Skills />}
          />
          <Route
            path="/projects"
            element={<Projects />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
    //</ThemeProvider>
  );
}

export default App;
