/*   const formulario = document.getElementById('formulario');
  const seccionOculta = document.getElementById('seccion-oculta');

  formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();
    const respuesta = document.getElementById('respuesta').value;
    if (respuesta === 'Lógica es la técnica utilizada para desarrollar instrucciones en una secuencia para lograr determinado objetivo.​') {
      seccionOculta.style.display = 'block';
      formulario.classList.add('oculto');
    } else {
      alert('Respuesta incorrecta');
    } 
    botonCierreOculto.addEventListener('click', function() {
        seccionOculta.style.display = 'none';
        botonCierre.style.display = 'block';
        botonCierreOculto.style.display = 'none';
        formulario.reset();
        formulario.classList.remove('oculto');
      });
  });

  
 */

  const formulario = document.getElementById('formulario');
  const seccionOculta = document.getElementById('seccion-oculta');
  const botonCierreOculto = document.getElementById('boton-cierre');
  
  formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();
    const respuesta = document.getElementById('respuesta').value;
    if (respuesta === 'Lógica es la técnica utilizada para desarrollar instrucciones en una secuencia para lograr determinado objetivo.​') {
      seccionOculta.style.display = 'block';
      formulario.style.display = 'none';
    } else {
      alert('Respuesta incorrecta');
    }
  });
  
  botonCierreOculto.addEventListener('click', function() {
    seccionOculta.style.display = 'none';
    formulario.style.display = 'block';
    formulario.reset();
  });
  