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
            media.src = "assets/images/" + array.ruta;
        } else if (array.tipo === "video") {
            media = document.createElement("video");
            media.controls = true;
            media.src = "assets/videos/" + array.ruta;
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

function loadSheList(items, container) {
    container.classList.add("list", "she_list")
    items.forEach(element => {
        const item_list = document.createElement("li");
        const txt_list = document.createElement("p");

        item_list.classList.add("list_item", "she");

        txt_list.textContent = element;
        item_list.appendChild(txt_list);
        container.appendChild(item_list);
    });
}
