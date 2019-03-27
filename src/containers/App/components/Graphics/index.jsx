import React from 'react';
import BarChart from './BarChart';
import PieChart from './PieChart';
import './styles.css';

const Graphics = () => (
  <div className="app_graphics">
  <div className="app_chart">
    <BarChart />
    <div>Bar Chart</div>
  </div>
  <div className="app_pie">
    <PieChart />
    <div>Pie Chart</div>
  </div>
  </div>
);

export default Graphics;
