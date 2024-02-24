const buttonIniPau = document.getElementById('inicioPausa');
const buttonRes = document.getElementById('reinicio');
const contadorCronometro = document.getElementById("contador");
let [horas,mins,segs] = [0,0,0];
let intervaloTiempo;
let estado = 'pausado';

function cronometro(){
    segs++;
    if(segs / 60 == 1){
        segs = 0;
        mins++;
        if(mins / 60 == 1){
            mins = 0;
            horas++;
        }
    }
    
    const formatoS = asignarFormato(segs);
    const formatoM = asignarFormato(mins);
    const formatoH = asignarFormato(horas);

    contadorCronometro.innerText = `${formatoH}:${formatoM}:${formatoS}`;
}

function asignarFormato(unidadTiempo){
    return unidadTiempo < 10 ? '0' + unidadTiempo : unidadTiempo;
}

buttonIniPau.addEventListener('click',function() {
    if(estado == 'pausado'){
        intervaloTiempo = window.setInterval(cronometro,1000);
        buttonIniPau.innerHTML = '<i class="bi bi-pause-fill"></i>';
        estado = 'activo';
    }
    else{
        window.clearInterval(intervaloTiempo);
        buttonIniPau.innerHTML= '<i class="bi bi-play-fill"></i>';
        estado= 'pausado';
    }
});

buttonRes.addEventListener('click',function(){
    segs = 0;
    mins = 0;
    horas = 0;
    contadorCronometro.innerText ='00:00:00' 
})