import { useState } from "react";

function Card({ titulo, imagen, fecha, descripcion, tipo }) {
  const [verDetalles, setVerDetalles] = useState(false);

  return (
    <article className="card">
      {tipo === "image" ? (
        <img src={imagen} alt={titulo} />
      ) : (
        <a href={imagen} target="_blank" rel="noreferrer">
          🎥 Ver video
        </a>
      )}
      <h2>{titulo}</h2>
      <p className="fecha">📅 {fecha}</p>

      <button onClick={() => setVerDetalles(!verDetalles)}>
        {verDetalles ? "Ocultar detalles" : "Ver detalles"}
      </button>

      {verDetalles && <p className="descripcion">{descripcion}</p>}
    </article>
  );
}

export default Card;