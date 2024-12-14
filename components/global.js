//timer
const PairDate = '2024-10-17T00:00:00'; 
const NextAniversaryM = "2024-12-17T00:00:00";
const NextAniversaryY = "2025-10-17T00:00:00";

const OlderAge = '2026-09-18T00:00:00'; 

function updateTimers() {
    timer(OlderAge, "#OldAge", "+18 años 🥺 en: ", true);
    timer(PairDate, "#Ago", "Juntos desde hace", false);
    timer(NextAniversaryM, "#blockertxt", "Disponible en: ", true);
}

setInterval(updateTimers, 1000);

//typewriter
const MiE = document.querySelector("#MI");
const PhrasesE = document.querySelector("#Phrases");
let Index = 0;
let Index2 = 0;

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

startTypewriter(MiE, Mitxts, Index);
startTypewriter(PhrasesE, Phrases, Index2);

//loader
const container_galeryUs_img = document.querySelector('.galery-us_img');
const container_galeryUs_vid = document.querySelector('.galery-us_vid');
const container_galeryUs_imgM = document.querySelector('.galery-us_imgM');
const container_listShe = document.querySelector("#she_list");

const medios_img = [
    { tipo: "imagen", ruta: "u5.jpg", sizew: "wsmall", sizeh: "hsmall",
        descripcion: "Nuestro segundo día conociendonos - Se nota esa tensión de una manera, pero aún así seguimos hablando. Gracias por darme esa oportunidad 🤗."},
    { tipo: "imagen", ruta: "u4.jpg", sizew: "wsmall", sizeh: "hsmall", 
        descripcion: "No pensé que este sería nuestro ultimo día en vernos de este año, pero fue uno en donde más compartimos tiempo juntos. Fue un día muyyy bonito"},
    { tipo: "imagen", ruta: "u6.jpg", sizew: "wmedium", sizeh: "wsmall", 
        descripcion: "Ojitos chititos con ojitos microscópicos ♡♡"},
    { tipo: "imagen", ruta: "u2.jpg", sizew: "wsmall", sizeh: "hsmall", 
        descripcion: "Literal la primera vez que alguien ajeno a mi familia me da un regalo..."},
    { tipo: "imagen", ruta: "u3.jpg", sizew: "wsmall", sizeh: "hsmall", 
        descripcion: "Todavia sigo agradecido con ese gesto ♡"},
    { tipo: "imagen", ruta: "u7.jpg", sizew: "wsmall", sizeh: "hsmall", 
        descripcion: "El día del gran robo 😋, me dejaste muy pensativo con eso, mis sentimientos por tí se reafirmaron mucho más ♡"},
    { tipo: "imagen", ruta: "u8.jpg", sizew: "wsmall", sizeh: "hsmall", 
        descripcion: '"Y esa camisa, ¿Acaso vienes a conquistarme?" *con una voz tan tiernaaa'},
    { tipo: "imagen", ruta: "u1.jpg", sizew: "wmedium", sizeh: "wsmall", 
        descripcion: "De esos días donde pudimos compartir muchos tiempo a solas, supremamente espectaculares esos momentos..."},
    { tipo: "imagen", ruta: "u9.jpg", sizew: "wmedium", sizeh: "hsmall", 
        descripcion: "Nuestra primera fotico 🥺, si no estoy mal fue la primera besuqueada que no dimos, ricoooo 😋"},
];

const medios_vid = [
    { tipo: "video", ruta: "vu1.mp4", descripcion: "Filmes de nuestro segundo día del cual salió tremendo documental y todo, recuerditos de las maldades de esos manes jajaja", sizew: "wmedium", sizeh: "wsmall" },
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

const features = [
    "Hermosísima",
    "Inteligente",
    "Trabajadora",
    "Responsable",
    "Te preocupas por quienes te rodean",
    "Pulcra y ordenada",
    "Tu sonrisa hipnotizante",
    "Enfoque en estudios y en tu propio futuro",
    "Tus ojitos",
    "Loquita",
    "Y muchísimas cosas más", 
]

loadCardMedia(medios_img, container_galeryUs_img);
loadCardMedia(medios_vid, container_galeryUs_vid);
loadCardMedia(medios_imgM, container_galeryUs_imgM);

loadSheList(features, container_listShe);

//Blocker
const blocker = document.querySelector("#blocker");
const mother = document.querySelector("#mother");

const today = new Date();


if(today == today){
    mother.style.display = "block";
    blocker.style.display = "none";
}