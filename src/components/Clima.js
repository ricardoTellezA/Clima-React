import React from 'react'
import PropTypes from 'prop-types';
export const Clima = ({ resutado }) => {

    const { name, main } = resutado;

    if (!name) return null;
    //Grados Kelvin

    const Kelvin = 273.15;

    return (
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>El clima de {name} es de: </h2>
                <p className="temperatura">
                    {parseFloat(main.temp - Kelvin, 10).toFixed(2)} <span>&#x2103;</span>
                </p>


                <p>Temperatura Maxima:
                    {parseFloat(main.temp_max - Kelvin, 10).toFixed(2)} <span>&#x2103;</span>
                </p>

                <p>Temperatura Minima:
                    {parseFloat(main.temp_min - Kelvin, 10).toFixed(2)} <span>&#x2103;</span>
                </p>
            </div>
        </div>
    )
}


Clima.propTypes = {
    resutado: PropTypes.object.isRequired,
}