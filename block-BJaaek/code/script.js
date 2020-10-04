const box1 = document.querySelector(".bg1");
const box2 = document.querySelector(".bg2");

function handler(e) {
    const R = Math.round(Math.random() * 255);
    const G = Math.round(Math.random() * 255);
    const B = Math.round(Math.random() * 255);
    const alpha = Number(Math.random().toFixed(2));

    e.currentTarget.style.backgroundColor = `rgba(${R}, ${G}, ${B}, ${alpha})`;
}

box1.addEventListener("click", handler);
box2.addEventListener("mousemove", handler);
