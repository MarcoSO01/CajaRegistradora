const selectProducto = document.getElementById('selectProducto');
const ponerProducto = document.getElementById('producto');
const ponerCantidad = document.getElementById('cantidad');
const agregarBtn = document.getElementById('agregarBtn');
const listaProductos = document.getElementById('listaProductos').getElementsByTagName('tbody')[0];
const totalProductos = document.getElementById('total');
const borrarTodoBtn = document.getElementById('borrarTodoBtn');
const imagenProducto = document.getElementById('imagenProducto');

let total = 0;

const precios = {
    1: 100000,
    2: 150000,
    3: 200000,
    4: 250000,
    5: 120000,
    6: 100000,
    7: 150000,
    8: 200000,
    9: 200000,
    10: 200000
};

selectProducto.addEventListener('change', () => {
    const selectedOption = selectProducto.options[selectProducto.selectedIndex].text;
    const imageUrl = selectProducto.options[selectProducto.selectedIndex].getAttribute('data-image');
    ponerProducto.value = selectedOption.split(' - ')[0];
    imagenProducto.src = imageUrl;
});

agregarBtn.addEventListener('click', () => {
    const producto = ponerProducto.value;
    const cantidad = parseInt(ponerCantidad.value);
    const precio = precios[selectProducto.value] || 0;

    if (producto && cantidad > 0) {
        const precioTotal = cantidad * precio;

        const row = listaProductos.insertRow();
        row.innerHTML = `
            <td>${producto}</td>
            <td>${cantidad}</td>
            <td>$${precioTotal}</td>
            <td><button class="borrarBtn">Borrar</button></td>
        `;

        total += precioTotal;
        totalProductos.textContent = `$${total}`;

        row.querySelector('.borrarBtn').addEventListener('click', () => {
            total -= precioTotal;
            totalProductos.textContent = `$${total}`;
            row.remove();
        });

        selectProducto.value = 0;
        ponerProducto.value = '';
        ponerCantidad.value = 1;
        imagenProducto.src = './images/dafiti.png';
    }
});

borrarTodoBtn.addEventListener('click', () => {
    listaProductos.innerHTML = '';
    total = 0;
    totalProductos.textContent = `$${total}`;
    imagenProducto.src = './images/dafiti.png';
});

