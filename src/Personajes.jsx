import React from 'react';
import PropTypes from 'prop-types';

const Personajes = ({nombre, descipcion, genero, imagen}) => (
    <>
        <div className="card text-center" >
            <div className="card-block">
                <h5 className="card-title">{ nombre }</h5>
                <p className="card-text">Descripcion: { descipcion }</p>
                <p className="card-text">Genero: { genero }</p>
                <img src={imagen} alt="imagen" />
                
            </div>

            {/* <div>
                <img src={} alt="" />
            </div> */}
        </div>
    </>
);

Personajes.propTypes = {
    nombre: PropTypes.string,
    descripcion: PropTypes.string,
    genero: PropTypes.string
}

Personajes.defaultProps = {
    nombre: "nombre no asignado",
    descripcion:  "no asignado"

}

export default Personajes;