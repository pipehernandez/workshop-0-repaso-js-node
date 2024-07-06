const products = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 1500, stock: 10 },
    { id: 2, name: 'Smartphone', category: 'Electronics', price: 800, stock: 20 },
    { id: 3, name: 'Headphones', category: 'Electronics', price: 100, stock: 30 },
    { id: 4, name: 'T-shirt', category: 'Clothing', price: 20, stock: 50 },
    { id: 5, name: 'Jeans', category: 'Clothing', price: 50, stock: 40 },
    { id: 6, name: 'Sneakers', category: 'Clothing', price: 80, stock: 30 },
    { id: 7, name: 'Backpack', category: 'Accessories', price: 40, stock: 25 },
    { id: 8, name: 'Watch', category: 'Accessories', price: 60, stock: 20 },
    { id: 9, name: 'Sunglasses', category: 'Accessories', price: 30, stock: 35 }
];

const $listProducts = document.getElementById("listProducts");

products.forEach((product) => {
    const $item = document.createElement("li");
    $item.textContent = `${product.name} - Categoría: ${product.category} - Precio: $${product.price} - Stock: ${product.stock}`;
    $listProducts.appendChild($item);
})

const $priceBtn = document.getElementById("mostrarPrecioTotal")
$priceBtn.addEventListener("click", (e) => {
    const initialValue = products.price;
    const precio = products.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue,);
    const $totalPrice = document.createElement("h2");
    $totalPrice.textContent = `El precio total de todos los productos es: $${precio}`;
    document.body.appendChild($totalPrice);
})
