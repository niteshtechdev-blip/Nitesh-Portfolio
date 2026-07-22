const text = "NITESH SAINI";
const name = document.querySelector(".name");

let index = 0;

function type() {
    if (index < text.length) {
        name.textContent += text.charAt(index);
        index++;
        setTimeout(type, 150);
    }
}

type();

document.addEventListener("mousemove", (e) => {
    const blob = document.querySelector("body");

    const x = (window.innerWidth / 2 - e.clientX) / 60;
    const y = (window.innerHeight / 2 - e.clientY) / 60;

    blob.style.transform = `translate(${x}px, ${y}px)`;
});


document.querySelectorAll('[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        lenis.scrollTo(link.getAttribute('href'), {
            duration: 1.5
        });
    });
});


// Animations 

