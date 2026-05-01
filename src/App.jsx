import React from 'react';
import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { NavBar, Movie, MovieInformation, Profile, Actors } from  './components';
import useStyles from './components/styles';

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}> 
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
      <div className={classes.toolbar} />
        <Routes>
          <Route path="/Movie/:id" element={<h1>Movie Information</h1>} />
          <Route path="/Actors/:id" element={<h1>Actors</h1>} />
          <Route path="/" element={<h1>Movies</h1>} />
          <Route path="/Profile/:id" element={<h1>Profile</h1>} />
        </Routes>
      </main>

    </div>
  );
};

export default App;