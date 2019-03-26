import React from 'react';
import BarChart from './BarChart';
import PieChart from './PieChart';
import './styles.css';

const Graphics = () => (
  <div className="app_graphics">
  <div className="app_chart">
    <BarChart />
    <div>Gráfico de barras</div>
  </div>
  <div className="app_pie">
    <PieChart />
    <div>Gráfico de quesos</div>
  </div>
  </div>
);

export default Graphics;
