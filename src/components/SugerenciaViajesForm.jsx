import { useState } from 'react';
import Card from './Card';
import '../styles/styles.css'; 

const SugerenciaViajesForm = () => {
  const [destino, setDestino] = useState('');
  const [actividad, setActividad] = useState('');
  const [error, setError] = useState('');
  const [infoCard, setInfoCard] = useState(null);

  const manejarEnvio = (evento) => {
    evento.preventDefault();

    // Validaciones
    if (destino.length < 3 || destino.startsWith(' ')) {
      setError('Por favor chequea que la información sea correcta.');
      return;
    }
    if (actividad.length < 6) {
      setError('Por favor chequea que la información sea correcta.');
      return;
    }

    setError('');
    setInfoCard({ destino, actividad });
  };

  return (
    <div>
      <form onSubmit={manejarEnvio}>
        <div>
          <label>Destino:</label>
          <input
            type="text"
            placeholder="Ej. París (mínimo 3 caracteres, sin espacios al inicio)"
            value={destino}
            onChange={(e) => setDestino(e.target.value)}
          />
        </div>
        <div>
          <label>Actividad recomendada:</label>
          <input
            type="text"
            placeholder="Ej. Visitar la Torre Eiffel (mínimo 6 caracteres)"
            value={actividad}
            onChange={(e) => setActividad(e.target.value)}
          />
        </div>
        <button type="submit">Enviar Sugerencia</button>
      </form>

      {error && <p>{error}</p>}

      {infoCard && (
        <Card destino={infoCard.destino} actividad={infoCard.actividad} />
      )}
    </div>
  );
};

export default SugerenciaViajesForm;
