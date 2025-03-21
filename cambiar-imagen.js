function cambiarImagen() {
    const selector = document.getElementById('imagenSelector');
    const imagenSeleccionada = selector.value;
    const preview = document.getElementById('preview');
    
    if (imagenSeleccionada) {
        document.body.style.backgroundImage = `url('${imagenSeleccionada}')`;
        preview.style.backgroundImage = `url('${imagenSeleccionada}')`;
    } else {
        document.body.style.backgroundImage = 'none';
        preview.style.backgroundImage = 'none';
    }
}

// Inicializar la vista previa
document.addEventListener('DOMContentLoaded', function() {
    const preview = document.getElementById('preview');
    preview.style.backgroundImage = 'none';
});