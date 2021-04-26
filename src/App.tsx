import React from 'react';

import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import ListContainer from './components/ListContainer/ListContainer'

import './App.css';

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <h2>Todo app</h2>
        <ListContainer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
