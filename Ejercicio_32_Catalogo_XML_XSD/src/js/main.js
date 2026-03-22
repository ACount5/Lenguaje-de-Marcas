fetch("productos.xml")
  .then(response => response.text())
  .then(xmlText => {

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, "application/xml");

    const productos = xmlDoc.getElementsByTagName("producto");
    const contenedor = document.getElementById("contenedor-productos");

    Array.from(productos).forEach(producto => {

      const nombre = producto.getElementsByTagName("nombre")[0].textContent;
      const precio = producto.getElementsByTagName("precio")[0].textContent;
      const descripcion = producto.getElementsByTagName("descripcion")[0].textContent;
      const categoria = producto.getElementsByTagName("categoria")[0].textContent;

      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <h2>${nombre}</h2>
        <p class="precio">${precio} €</p>
        <p>${descripcion}</p>
        <span class="categoria">${categoria}</span>
      `;

      contenedor.appendChild(card);
    });

  })
  .catch(error => console.error("Error:", error));