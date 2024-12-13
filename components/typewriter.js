const typingSpeed = 100;
const pauseBetweenTexts = 1250; 

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