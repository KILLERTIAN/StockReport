// src/App.jsx
import React from 'react';
import EVMarketSharePie from './components/EVMarketSharePie';
import ProjectedEVGrowthBar from './components/ProjectedEVGrowthBar';
import EVMarketSizeLine from './components/EVMarketSizeLine';
import './App.css'; // Import the CSS file
import TypesEVBar from './components/TypesEVBar';

const App = () => {
  return (
    <div className="app-container">
      <h1 className='text-2xl font-bold'>EV Market Data Visualization</h1>
      <div className="chart-container">
        <div className="chart">
          <EVMarketSharePie />
        </div>
        <div className="chart">
          <ProjectedEVGrowthBar />
        </div>
        <div className="chart">
          <EVMarketSizeLine />
        </div>
        <div className="chart">
          <TypesEVBar />
        </div>
      </div>
    </div>
  );
};

export default App;
