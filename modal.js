window.onload = function() {
    setTimeout(function() {
        document.getElementById('modal').style.display = 'block';
    }, 3000);
}

// Cerrar el modal cuando se hace clic en la X
document.querySelector('.close').onclick = function() {
    document.getElementById('modal').style.display = 'none';
}

// Cerrar el modal cuando se hace clic fuera de él
window.onclick = function(event) {
    let modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}