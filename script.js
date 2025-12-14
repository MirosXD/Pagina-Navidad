function actualizarContador() {
    const navidad = new Date(new Date().getFullYear(), 11, 25, 0, 0, 0);
    const ahora = new Date();
    const diferencia = navidad - ahora;

    if (diferencia <= 0) {
        document.getElementById("tiempo").innerHTML = "🎉 ¡Feliz Navidad! 🎉";
        return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
    const segundos = Math.floor((diferencia / 1000) % 60);

    document.getElementById("tiempo").innerHTML =
        `${dias} días 🎄 ${horas} horas ⏰ ${minutos} minutos 🎁 ${segundos} segundos ❄️`;
}

setInterval(actualizarContador, 1000);
actualizarContador();
function reproducirMusica() {
    const musica = document.getElementById("musica");
    musica.volume = 0.5; // volumen medio
    musica.play();
}

