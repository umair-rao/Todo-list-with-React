import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import TodoContainer from './components/TodoContainer';
import './App.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <Router>
    <TodoContainer />
  </Router>,
);
