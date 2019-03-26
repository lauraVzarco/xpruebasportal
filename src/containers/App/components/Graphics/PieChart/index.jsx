import React, { useState } from 'react';
import * as d3 from 'd3';
import Slice from './Slice.jsx';

const PieChart = () => {
  // For a real world project use:
  // https://github.com/digidem/react-dimensions
  const [width] = useState(200);
  const [height] = useState(200);
  const [minViewportSize] = useState(Math.min(width, height));
  const data = [1, 2, 3, 4];

  const [radius] = useState((minViewportSize * 0.9) / 2);

  const [x] = useState(width / 2);
  const [y] = useState(height / 2);

  const pie = d3.pie()(data);

  return (
    <svg width={ width } height={ height }>
      <g transform={ `translate(${ x }, ${ y })` }>
        <Slice pie={ pie } outerRadius={ radius } />
      </g>
    </svg>
  );
};

export default PieChart;
