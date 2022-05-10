import React from 'react';
import './App.css';
import Content from './container/Content';
import Sidebar from './container/Sidebar';
import MetricsView from './container/MetricsView';

function App() {
  return (
    <div className="wrapper">
      <Sidebar />
      <MetricsView />
    </div>
  );
}

export default App;
