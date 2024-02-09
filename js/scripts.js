



/* Script ocultar password */

function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var toggleIcon = document.querySelector(".toggle-password");
  
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      toggleIcon.innerHTML = '<img src="img/openeye.svg" alt="Ojo abierto">'; // Icono de ojo abierto

    } else {
      passwordInput.type = "password";
      toggleIcon.innerHTML = '<img src="img/closeye.svg" alt="Ojo abierto">'; // Icono de ojo cerrado
    }
  }
  









  /* Script para el switch */
  function cambiarTexto() {
    var miSwitch = document.getElementById("okSwitch");
    var label = document.querySelector('span[for="okSwitch"]');

    // Cambia el texto del label basado en el estado del switch
    label.textContent = miSwitch.checked ? "Sí" : "No";
}





/* Scripts del admind pannel */

document.getElementById('settingsToggle').addEventListener('click', function () {
    var arrowIcon = this.querySelector('.arrow-icon');
    if (this.getAttribute('aria-expanded') === 'true') {
        arrowIcon.classList.remove('fa-chevron-up');
        arrowIcon.classList.add('fa-chevron-down');
    } else {
        arrowIcon.classList.remove('fa-chevron-down');
        arrowIcon.classList.add('fa-chevron-up');
    }
});


/* Script para agregar multiples opciones */
function addOption(selectId, inputId) {
    var inputValue = $(`#${inputId}`).val();
    $(`#${selectId}`).append(`<option>${inputValue}</option>`);
    $(`#${inputId}`).val('');
}



/* Canvas */


/* document.addEventListener("DOMContentLoaded", function() {
  


var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var painting = false;

canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", stopPainting);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("touchstart", startPainting);
canvas.addEventListener("touchend", stopPainting);
canvas.addEventListener("touchmove", draw);

function startPainting(e) {
    painting = true;
    draw(e);
}

function stopPainting() {
    painting = false;
    context.beginPath();
}

function draw(e) {
    e.preventDefault();

    var x, y;

    if (e.touches) {
        x = e.touches[0].clientX - canvas.getBoundingClientRect().left;
        y = e.touches[0].clientY - canvas.getBoundingClientRect().top;
    } else {
        x = e.clientX - canvas.getBoundingClientRect().left;
        y = e.clientY - canvas.getBoundingClientRect().top;
    }

    if (!painting) return;

    context.lineWidth = 2;
    context.lineCap = "round";
    context.strokeStyle = "black";

    // Ajustamos las coordenadas para centrar en el canvas
    x = x - canvas.width / 15;
    y = y - canvas.height / 20;

    context.lineTo(x, y);
    context.stroke();
    context.beginPath();
    context.moveTo(x, y);
}

function mostrarImagen() {
    var lista = document.getElementById("lista");

    // Rutas de las imágenes según la opción seleccionada
    var imagenes = {
        Cabeza_cuello: "/img/canva/cabeza_cuello.svg",
        Tronco: "img/canva/tronco.svg",
        Rodillas: "img/canva/rodillas.svg",
        Miembros_superiores: "img/canva/miembros_superiores.svg",
        Miembros_inferiores: "img/canva/miembros_inferiores.svg",
    };

    // Limpia el canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Carga la imagen seleccionada en el canvas
    var imagenSeleccionada = new Image();
    imagenSeleccionada.src = imagenes[lista.value];

    imagenSeleccionada.onload = function () {
        context.drawImage(imagenSeleccionada, 0, 0, canvas.width, canvas.height);
    };
}




        function limpiarCanvas() {
            // Limpia solo el trazo dibujado (sin afectar la imagen de fondo)
            context.clearRect(0, 0, canvas.width, canvas.height);
            // Restablece el valor del select al estado inicial
            document.getElementById("lista").selectedIndex = 0;
            
        };

    });

 */

    /* Firma */
    document.addEventListener("DOMContentLoaded", function() {
        var canvas = document.querySelector("canvas");
        var signaturePad = new SignaturePad(canvas);
    
        document.getElementById("clear").addEventListener("click", function() {
            signaturePad.clear();
        });
       
      });
    
    

      
    /* Photo */
    function setupPhotoTaking(videoId, takePhotoButtonId, canvasId) {
        const video = document.getElementById(videoId);
        const takePhotoButton = document.getElementById(takePhotoButtonId);
        const canvas = document.getElementById(canvasId);
        const context = canvas.getContext('2d');
    
        // Verificar si el navegador admite getUserMedia
        navigator.getUserMedia = navigator.getUserMedia ||
                                 navigator.webkitGetUserMedia ||
                                 navigator.mozGetUserMedia ||
                                 navigator.msGetUserMedia;
    
        // Si getUserMedia es compatible, mostrar el stream de video
        if (navigator.getUserMedia) {
            navigator.getUserMedia({ video: true }, function(stream) {
                video.srcObject = stream;
            }, function(err) {
                console.error('Ocurrió un error al acceder a la cámara.', err);
            });
        } else {
            alert('Lo siento, tu navegador no soporta getUserMedia.');
        }
    
        // Evento para tomar la foto
        takePhotoButton.addEventListener('click', function() {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            // Convertir la imagen del canvas a una URL de datos
            const dataURL = canvas.toDataURL('image/png');
            // Abrir la imagen en una nueva pestaña
            window.open(dataURL);
        });
    }