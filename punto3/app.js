// Obtenemos el boton con su id y le agregamos un escuchador de eventos cuando se haga click y se ejecuta la funcion fetchPosts().
document.getElementById("fetch-posts").addEventListener("click", () => {
  fetchPosts();
});

// Aqui esta la funcion fetchPosts, se encarga de realizar ka peticion fecth a la url.
const fetchPosts = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
  // Aqui obtenemos la respuesta y si hay errror lo lanzamos.
    .then((response) => {
      if (!response.ok) {
        // aqui si no hay una respuesta mostramos el error.
        throw new Error("Network response was not ok " + response.statusText);
      }
      // Aqui retornamos la respuesta en formato json para manipularla
      return response.json();
    })
    // Aqui hacemos la variable posts y le asignamos la respuesta en formato json y se lo pasamos a la funcion displayPosts
    .then((posts) => {
      displayPosts(posts);
    })
    // aqui atrapamos los posibles errores y los mostramos con la funcion displayError
    .catch((error) => {
      displayError(error);
    });
};

// Aqui mostramos el contenido de la peticion hecha a la api en la pagina.
const displayPosts = (posts) => {
  const postList = document.getElementById("post-list");
  postList.innerHTML = "";
  posts.forEach((post) => {
    const listItem = document.createElement("li");
    listItem.textContent = `Title: ${post.title}`;
    postList.appendChild(listItem);
  });
};

// Aqui mostramos el error que haya en caso de que la peticion lo tenga
const displayError = (error) => {
  const errorMessage = document.getElementById("error-message");
  errorMessage.textContent = `Error: ${error.message}`;
};
