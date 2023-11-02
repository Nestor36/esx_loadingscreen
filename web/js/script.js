document.addEventListener('DOMContentLoaded', function() {
    var miAudio = document.getElementById('gx_audio');
    var botonPausa = document.getElementById('gx_pausa');
    
    function reiniciarAudio() {
        miAudio.currentTime = 0; 
        miAudio.play(); 
    }
    
    miAudio.addEventListener('ended', reiniciarAudio);
    
    document.addEventListener('keydown', function(event) {
        var icono = botonPausa.querySelector('i');
        if(event.code === 'Space'){
            if (miAudio.paused) {
                miAudio.play();
                icono.classList.remove('fa-play');
                icono.classList.add('fa-pause');
            } else {
                miAudio.pause();
                icono.classList.remove('fa-pause');
                icono.classList.add('fa-play');
            }
        }
    });
});