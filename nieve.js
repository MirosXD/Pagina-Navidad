function crearNieve() {
    const nieve = document.createElement("div");
    nieve.classList.add("nieve");
    nieve.innerHTML = "❄";

    nieve.style.left = Math.random() * window.innerWidth + "px";
    nieve.style.animationDuration = Math.random() * 3 + 2 + "s";
    nieve.style.opacity = Math.random();
    nieve.style.fontSize = Math.random() * 10 + 10 + "px";

    document.body.appendChild(nieve);

    setTimeout(() => {
        nieve.remove();
    }, 5000);
}

setInterval(crearNieve, 200);
