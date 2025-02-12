// JavaScript Document

$("#contenido").append("entramos"+fechaActual);

$(document).ready(function() {      
  var fechaActual = new Date().toISOString().split('T')[0];

  
  //$.getJSON('https://raw.githubusercontent.com/jlopezhonduras/Honduras-en-Cifras/master/datos/datos.json', function(datos) {
  $.getJSON('datos/datos.jsyon', function(datos) {

    var resultado = datos.find(item => item.fecha === fechaActual);

    if (resultado) {
        console.log("Datos de la fecha actual:", resultado);
        $("#valorindicador").html(
            resultado.valor
            /*"Fecha: " + resultado.fecha + "<br>" +

            "Fuente: " + resultado.fuente + "<br>" +
            "Lugar: " + resultado.lugar + " (" + resultado.lugardet + ")<br>" +
            "Periodo: " + resultado.periodo*/
        );
    } else {
        console.log("No hay datos para la fecha actual.");
        $("#resultado").html("No hay datos disponibles para hoy.");
    }
  }).fail(function() {
      console.log("Error al cargar los datos.");
      $("#valorindicador").html("Error al cargar los datos.");
  });
  });