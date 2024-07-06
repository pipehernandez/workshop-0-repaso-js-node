const $divProducts = document.getElementById("products");
const $btnProducts = document.getElementById("mostrarProductos");
$btnProducts.addEventListener('click', async(e) => {
    e.preventDefault();
    const $productsFetched = await fetch("https://api.escuelajs.co/api/v1/products");
    const productsToJson = await $productsFetched.json();
    productsToJson.forEach(element => {
        const $listaProducts = document.getElementById("listProducts");
        $listaProducts.innerHTML += /*html*/`
            <li>
                <h2>${element.title}</h2>
                <p>${element.description}</p>
                <p>$${element.price}</p>
            </li>
        `;
        
    });
})