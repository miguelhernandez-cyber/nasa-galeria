import { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Card from "./components/Card";
import Footer from "./components/Footer";
import "./App.css";

const API_KEY = "8dnFjHjj9FFdKW6dPWqjJhKBJqhRpwm6KFBw6rnf";
const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=12`;

function App() {
  const [fotos, setFotos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((respuesta) => {
        if (!respuesta.ok) throw new Error("Error al cargar los datos");
        return respuesta.json();
      })
      .then((datos) => {
        setFotos(datos);
        setCargando(false);
      })
      .catch((err) => {
        setError(err.message);
        setCargando(false);
      });
  }, []);

  const fotosFiltradas = fotos.filter((foto) =>
    foto.title.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="app">
      <Header />
      <SearchBar busqueda={busqueda} setBusqueda={setBusqueda} />

      {cargando && <p className="mensaje">🚀 Cargando información del cosmos...</p>}
      {error && <p className="mensaje">❌ {error}</p>}

      {!cargando && !error && (
        <>
          <p className="contador">Resultados: {fotosFiltradas.length}</p>
          <main className="grid">
            {fotosFiltradas.map((foto) => (
              <Card
                key={foto.date + foto.title}
                titulo={foto.title}
                imagen={foto.url}
                fecha={foto.date}
                descripcion={foto.explanation}
                tipo={foto.media_type}
              />
            ))}
          </main>
        </>
      )}

      <Footer />
    </div>
  );
}

export default App;