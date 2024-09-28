import React, { useState, useEffect } from 'react';

const Curso = () => {
    const [curso, setCurso] = useState({
        nombre: '',
        creditos: '',
        descripcion: '',
    });

    // Consumir el endpoint usando fetch
    useEffect(() => {
        fetch('https://test-deploy-12.onrender.com/cursos')
            .then((response) => response.json())
            .then((data) => {
                // Suponiendo que la respuesta sea un objeto con los campos requeridos
                setCurso({
                    nombre: data.nombre || '',
                    creditos: data.creditos || '',
                    descripcion: data.descripcion || '',
                });
            })
            .catch((error) => console.error('Error fetching the course data:', error));
    }, []);

    // Manejar cambios en los campos de texto
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCurso((prevCurso) => ({
            ...prevCurso,
            [name]: value,
        }));
    };

    return (
        <div>
            <h1>Detalles del Curso</h1>
            <div>
                <label>Nombre curso:</label>
                <input
                    type="text"
                    name="nombre"
                    value={curso.nombre}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>Cr�ditos:</label>
                <input
                    type="text"
                    name="creditos"
                    value={curso.creditos}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>Descripci�n:</label>
                <input
                    type="text"
                    name="descripcion"
                    value={curso.descripcion}
                    onChange={handleInputChange}
                />
            </div>
        </div>
    );
};

export default Curso;
