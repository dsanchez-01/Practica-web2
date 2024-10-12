const new_titulo = document.getElementById('titulo');
const boton_texto = document.getElementById('boton_texto');
const contador = document.getElementById('contador');
const boton_fondo = document.getElementById('boton_fondo');
const input_texto = document.getElementById('entrada_teclado')
const reseteado = document.getElementById('reset')

let contador_click = 0

boton_texto.addEventListener('click', function(){
    contador_click++;
    new_titulo.textContent = 'Texto cambiado';
    new_titulo.style.color = 'yellow';
    contador.textContent = `El botón ha sido presionado ${contador_click} veces.`
});

boton_fondo.addEventListener('click', function(){
    const random_color =`#${Math.floor(Math.random() * 1677721).toString(16) }`
    document.body.style.backgroundColor = random_color;
});

input_texto.addEventListener('input', function(){
    new_titulo.textContent = input_texto.value;  
});

reseteado.addEventListener('click', function(){
   contador_click = 0 
   contador.textContent =`El botón ha sido presionado ${contador_click} veces.`
});