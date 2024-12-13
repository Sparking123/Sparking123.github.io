const MiE = document.getElementById("MI");
const PhrasesE = document.getElementById("Phrases");

const Mitxts = [
    "Shadday Cabarcas",
    "MI NIÑA",
    "MI AMOR",
    "MI SLEEPY GIRL",
    "MI PRINCESA",
    "MI AMADA",
    "MI MEJOR AMIGA",
    "MI CIELO",
    "MI CHAMBEADORA",
    "COSITA MIA",
];
const Phrases = [
    "Eres quien hace felíz mi día",
    "Quiero estar contigo x siempre",
    "Casemonos a su tiempo!",
    "Seamos felices juntitos",
    "Te esperaré el tiempo que sea necesario",
    "Pase lo que pase siempre te amaré",
    "Resolvamos todo juntos, como un equipo",
];

// Configuraciones del typewriter
const typingSpeed = 100;
const pauseBetweenTexts = 1250; 
let currentTextIndex = 0;
let currentTextIndex2 = 0;


startTypewriter(MiE, Mitxts, currentTextIndex);
startTypewriter(PhrasesE, Phrases, currentTextIndex2);

function typewriterEffect(typer, text, callback) {
    let charIndex = 0;
    typer.textContent = ""; 

    // Función para escribir cada letra
    function typeNextChar() {
        if (charIndex < text.length) {
            typer.textContent += text[charIndex];
            charIndex++;
            setTimeout(typeNextChar, typingSpeed);
        } else {
            // Llamar al callback cuando termine de escribir
            setTimeout(callback, pauseBetweenTexts);
        }
    }

    typeNextChar();
}

function startTypewriter(typewriterElement, array, currentTextIndex) {
    function showNextText() {
        const nextText = array[currentTextIndex]+"...";
        typewriterEffect(typewriterElement, nextText, () => {
            currentTextIndex = (currentTextIndex + 1) % array.length; // Cambiar al siguiente texto
            showNextText();
        });
    }

    showNextText();
}