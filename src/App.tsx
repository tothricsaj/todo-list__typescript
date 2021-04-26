import React from 'react';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import './App.css';

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <h2>Todo app</h2>
      </div>
    </ErrorBoundary>
  );
}

export default App;
