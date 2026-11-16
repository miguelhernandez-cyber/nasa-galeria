function SearchBar({ busqueda, setBusqueda }) {
  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Buscar por título..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <button onClick={() => setBusqueda("")}>Limpiar</button>
    </div>
  );
}

export default SearchBar;