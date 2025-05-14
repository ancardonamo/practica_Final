const productos=[
    {
        id:1,
        nombre:"Spiderman Figura",
        categoria:"figura",
        precio:38.92,
    },
    {
        id:2,
        nombre:"Superman Figura",
        categoria:"figura",
        precio:40.00,
    },
    {
        id:3,
        nombre:"HotWheels",
        categoria:"carro",
        precio:7.99,
    },
    {
        id:4,
        nombre:"f-35",
        categoria:"avion",
        precio:127.99,
    },
]

let carrito=[]

function init(){
    mostrarProductos(productos)
}

function mostrarProductos(productos){
    const producto=document.getElementById(`tarjeta`)
    producto.innerHTML=``
    productos.forEach(p => {
        producto.innerHTML+=`
            <div class="card col-3 m-2">
                <div class="card-body">
                    <h5 class="card-title">${p.nombre}</h5>
                    <p class="card-text">$${p.precio}</p>
                    <button onclick="agregarAlCarrito(${p.id})" class="btn btn-success">Agregar al carrito</button>
                </div>
            </div>`
    });
}

function filtrarCategoria(){
    const categoria=document.getElementById(`floatingSelect`).value;
    if (categoria===`todos`){
        mostrarProductos(productos);
    }
    else{
        const filtrados=productos.filter(p=> p.categoria===categoria);
        mostrarProductos(filtrados);
    }
}

function agregarAlCarrito(ID){
    let buscado=productos.find(p=> p.id===ID);
    carrito.push(buscado)
    actualizarProducto()
    alert(`Se añadió con exito el producto: ${buscado.nombre} con costo: $${buscado.precio}`)
}

function actualizarProducto(){
    let mensaje=document.getElementById(`carrito`)
    mensaje.innerHTML=`Carrito:${carrito.length} producto(s)`
}