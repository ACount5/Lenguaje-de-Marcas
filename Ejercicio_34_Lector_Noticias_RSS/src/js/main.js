async function traerNoticias() {
  try {
    const respuesta = await fetch("feed.xml");
    const texto = await respuesta.text();

    const parser = new DOMParser();
    const xml = parser.parseFromString(texto, "application/xml");

    const items = xml.getElementsByTagName("item");
    const contenedor = document.getElementById("noticias");

    Array.from(items).forEach(item => {
      const titulo = item.getElementsByTagName("title")[0].textContent;
      const autor = item.getElementsByTagName("author")[0].textContent;
      const fecha = item.getElementsByTagName("pubDate")[0].textContent;
      const descripcion = item.getElementsByTagName("description")[0].textContent;

      const card = document.createElement("article");
      card.classList.add("noticia");

      card.innerHTML = `
        <h2>${titulo}</h2>
        <p class="meta">${autor} | ${fecha}</p>
        <p>${descripcion}</p>
      `;

      contenedor.appendChild(card);
    });

  } catch (error) {
    console.error("Error cargando noticias:", error);
  }
}

traerNoticias();