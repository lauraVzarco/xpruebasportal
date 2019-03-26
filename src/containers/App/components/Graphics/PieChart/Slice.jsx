import React from 'react';
import * as d3 from 'd3';

const Slice = ({ pie, innerRadius = 0, outerRadius }) => {
  // https://github.com/d3/d3/wiki/SVG-Shapes#arc
  const arc = d3
    .arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius);
  const interpolate = d3.interpolateRgb('#eaaf79', '#bc3358');

  return pie.map((slice, index) => {
    const sliceColor = interpolate(index / (pie.length - 1));

    return <path d={ arc(slice) } key={ index } fill={ sliceColor } />;
  });
};

export default Slice;
