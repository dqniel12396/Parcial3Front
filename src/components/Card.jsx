import React from 'react';
import '../styles/styles.css'; 

const Card = ({ destino, actividad }) => {
  return (
    <div className="card">
      <h2>Hola trotamundos esta es tu Sugerencia de Viaje</h2>
      <p><strong>Destino:</strong> {destino}</p>
      <p><strong>Actividad:</strong> {actividad}</p>
    </div>
  );
};

export default Card;
