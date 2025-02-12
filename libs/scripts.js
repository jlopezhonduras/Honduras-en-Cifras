// JavaScript Document

const urlJSON = 'https://raw.githubusercontent.com/jlopezhonduras/Honduras-en-Cifras/master/datos/datos.json';
        
$.get(urlJSON)
    .done(data => {
        $("#contenido").html(`
            <h2>${data.pais}</h2>
            <p>Población: ${data.poblacion.toLocaleString()}</p>
            <p>Municipios: ${data.municipios.join(", ")}</p>
        `);
    })
    .fail(error => {
        console.error("Error:", error);
        $("#contenido").html("Error al cargar datos.");
    });