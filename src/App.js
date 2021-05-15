import { useEffect, useState } from "react";
import { Clima } from "./components/Clima";
import { Error } from "./components/Error";
import { Formulario } from "./components/Formulario";
import { Header } from "./components/Header";

function App() {
  const [busqueda, guardarBusqueda] = useState({
    ciudad: "",
    pais: "",
  });

  const [consultar, guardarConsultar] = useState(false);

  const { ciudad, pais } = busqueda;
  const [resultado, guardarResultado] = useState({});
  const [error, guardarError] = useState(false);

  useEffect(() => {
    const consultarAPI = async () => {
      if (consultar) {
        const appkey = "7100ded05a39a45a110fed9eca2eda12";
        const url = ` http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appkey}`;

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        guardarResultado(resultado);
        guardarConsultar(false);

        if (resultado.cod === "404") {
          guardarError(true);
        } else {
          guardarError(false);
        }
      }

    }


    consultarAPI();
    //eslint-disable-next-line
  }, [consultar]);

  let componente;
  if (error) {

    componente = <Error mensaje="No hay resultados" />

  } else {
    componente = <Clima resutado={resultado} />
  }

  return (
    <>
      <Header titulo="Clima React App" />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
                busqueda={busqueda}
                guardarBusqueda={guardarBusqueda}
                guardarConsultar={guardarConsultar}
              />
            </div>
            <div className="col m6 s12">
              {componente}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
