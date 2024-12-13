const container_galeryUs_img = document.querySelector('.galery-us_img');
const container_galeryUs_vid = document.querySelector('.galery-us_vid');
const container_galeryUs_imgM = document.querySelector('.galery-us_imgM');

const medios_img = [
    { tipo: "imagen", ruta: "u5.jpg", sizew: "wsmall", sizeh: "hsmall",
        descripcion: "Nuestro segundo día conociendonos - Se nota esa tensión de una manera, pero aún así seguimos hablando. Gracias por darme esa oportunidad 🤗."},
    { tipo: "imagen", ruta: "u4.jpg", sizew: "wsmall", sizeh: "hsmall", 
        descripcion: "No pensé que este sería nuestro ultimo día en vernos de este año, pero fue uno en donde más compartimos tiempo juntos."},
    { tipo: "imagen", ruta: "u6.jpg", sizew: "wmedium", sizeh: "wsmall", 
        descripcion: "Ojitos chititos con ojitos microscópicos ♡♡"},
    { tipo: "imagen", ruta: "u2.jpg", sizew: "wsmall", sizeh: "hsmall", 
        descripcion: "Literal la primera vez que alguien ajeno a mi familia me da un regalo..."},
    { tipo: "imagen", ruta: "u3.jpg", sizew: "wsmall", sizeh: "hsmall", 
        descripcion: "Todavia sigo agradecido con ese gesto ♡"},
    { tipo: "imagen", ruta: "u7.jpg", sizew: "wsmall", sizeh: "hsmall", 
        descripcion: "El día del gran robo 😋, me dejaste muy pensativo con eso, mis sentimientos por tí se reafirmaron"},
    { tipo: "imagen", ruta: "u8.jpg", sizew: "wsmall", sizeh: "hsmall", 
        descripcion: '"Y esa camisa, ¿Acaso vienes a conquistarme?"'},
    { tipo: "imagen", ruta: "u1.jpg", sizew: "wmedium", sizeh: "wsmall", 
        descripcion: "De esos días donde pudimos compartir muchos tiempo a solas, supremamente espectaculares esos momentos..."},
    { tipo: "imagen", ruta: "u9.jpg", sizew: "wmedium", sizeh: "hsmall", 
        descripcion: "Nuestra primera fotico 🥺, si no estoy mal fue la primera besuqueada que no dimos, ricoooo 😋"},
];

const medios_vid = [
    { tipo: "video", ruta: "vu1.mp4", descripcion: "Filmes de nuestro segundo día del cual salió tremendo documental y todo, recuerditos de las maldades de esos manes", sizew: "wmedium", sizeh: "wsmall" },
    { tipo: "video", ruta: "vu2.mp4", descripcion: "Tremendaaa pena, la traición... Mirate como te mueres de pena 🥺 pero aun así seguiste conmigo. Mi niña penosa 🤗", sizew: "wmedium", sizeh: "hsmall" },
    { tipo: "video", ruta: "vu3.mp4", descripcion: "Día posterior al que donde comenzamos nuestro noviazgo, tú y tu jueguito de Temu que ni has terminado", sizew: "wmedium", sizeh: "hsmall" },
    { tipo: "video", ruta: "vu4.mp4", descripcion:'"Me va a besa que emociooon"... "Me besó"... *Coloca un sonrisita que me enamora mucho más', sizew: "wsmall", sizeh: "hsmall" },
    { tipo: "video", ruta: "vu5.mp4", descripcion: "*Pocas expresiones", sizew: "wsmall", sizeh: "hsmall" },
];

const medios_imgM = [
    { tipo: "imagen", ruta: "m2.jpg", descripcion: "Con esos ojitos son los que me miras ehhhhhh, tan lindaaaa", sizew: "wmedium", sizeh: "hsmall" },
    { tipo: "imagen", ruta: "m1.jpg", descripcion: "Nuestra primera manualidad juntitos ♡♡", sizew: "wsmall", sizeh: "wsmall" },
    { tipo: "imagen", ruta: "m3.jpg", descripcion: "La segunda manualidad que lastimosamente ya no existe 😓", sizew: "wsmall", sizeh: "hsmall" },
];

loadCardMedia(medios_img, container_galeryUs_img);
loadCardMedia(medios_vid, container_galeryUs_vid);
loadCardMedia(medios_imgM, container_galeryUs_imgM);

function loadCardMedia(medios, container) {
    medios.forEach((array) => {
        // Crear un div con la clase "card-img"
        const card = document.createElement("div");
        const card_media = document.createElement("div");
        const card_content = document.createElement("div");
        const card_text = document.createElement("p");

        card.classList.add("galery_card", "hmedium", "wmedium")
        card_media.className = "card_img";
        card_content.className = "card_content";
        card_text.textContent = array.descripcion;

        let media;

        if (array.tipo === "imagen") {
            media = document.createElement("img");
            media.alt = "Imagen";
            media.src = "../assets/images/" + array.ruta;
        } else if (array.tipo === "video") {
            media = document.createElement("video");
            media.controls = true;
            media.src = "../assets/videos/" + array.ruta;
        } else {
            console.warn("Tipo de array no soportado:", array.tipo);
            return;
        }

        card_content.append(card_text);
        card_media.append(media);
        card.append(card_media, card_content);

        // Añadir el contenedor principal al documento
        container.appendChild(card);
    });
}


