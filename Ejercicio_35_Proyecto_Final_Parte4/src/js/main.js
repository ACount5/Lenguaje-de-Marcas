const contenedor = document.getElementById("contenedor");
const buscador = document.getElementById("buscador");

let vehiculos = [];

async function cargarDatos() {
  const res = await fetch("datos.xml");
  const text = await res.text();

  const parser = new DOMParser();
  const xml = parser.parseFromString(text, "application/xml");

  const items = xml.getElementsByTagName("vehiculo");

  vehiculos = Array.from(items).map(v => ({
  nombre: v.getElementsByTagName("nombre")[0].textContent,
  precio: v.getElementsByTagName("precio")[0].textContent,
  descripcion: v.getElementsByTagName("descripcion")[0].textContent,
  marca: v.getElementsByTagName("marca")[0].textContent,
  imagen: v.getElementsByTagName("imagen")[0].textContent
}));
  renderVehiculos(vehiculos);
}

function renderVehiculos(lista) {
  contenedor.innerHTML = "";

  lista.forEach(v => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
  <img src="${v.imagen}" alt="${v.nombre}">
  <h2>${v.nombre}</h2>
  <p>${v.descripcion}</p>
  <p class="precio">${v.precio} €</p>
  <span>${v.marca}</span>
`;

    contenedor.appendChild(card);
  });
}


buscador.addEventListener("input", () => {
  const texto = buscador.value.toLowerCase();

  const filtrados = vehiculos.filter(v =>
    v.nombre.toLowerCase().includes(texto) ||
    v.descripcion.toLowerCase().includes(texto)
  );

  renderVehiculos(filtrados);
});

cargarDatos();