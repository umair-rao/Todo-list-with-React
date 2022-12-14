import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import TodoContainer from './components/TodoContainer';
import './App.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <Router basename={process.env.PUBLIC_URL}>
    <TodoContainer />
  </Router>,
);
