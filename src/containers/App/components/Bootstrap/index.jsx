import React from 'react';

const Bootstrap = () => (
  <div>
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Front-End Team</th>
          <th scope="col">Clara</th>
          <th scope="col">Laura</th>
          <th scope="col">Alberto</th>
        </tr>
      </thead>
      <tr />
      <tr>
        <th scope="row"> Where they live?</th>
        <td>Callao</td>
        <td>Fuencarral</td>
        <td>Seseña</td>
      </tr>
      <tr>
        <th scope="row">Hobbies</th>
        <td>Cinema</td>
        <td>Bird watching</td>
        <td>Roller Skating</td>
      </tr>
    </table>
    <figure className="figure">
      <img
        src="https://cdn-images-1.medium.com/max/800/1*3SVfBkNZI2f-sspiq59xcw.png"
        className="figure-img img-fluid rounded"
        alt="A generic square placeholder with rounded corners in a figure."
      />
      <figcaption className="figure-caption text-right">A caption of the react logo </figcaption>
    </figure>
  </div>
);

export default Bootstrap;
