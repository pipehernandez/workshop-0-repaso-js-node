Lineas 1 a 3 se obtiene el boton con nombre: "Cargar Posts" por medio de su Id: "fetch-posts" y al mismo tiempo se le agrega un escuchador de eventos para cuando se le hace click ejecute la funcion  con nombre: "fetchPosts".

Linea 5 Se crea la funcion flecha llamada: "fetchPosts".
Linea 6 Se hace la peticion a la api por medio de fecth con el url de la api publica.
Linea 7 se hace la funcion flecha para cuando la promesa se cumpla y se obtiene la respuesta.
LIneas 8 a 10 se pone el condicional para que en caso de que la promesa no se cumpla nos salte el error.
Linea 11 retornamos la respuesta transformada en json.
Linea 13 y 14 obtenemos los posts de la respuesta y ejecutamos la funcion: "displayPosts" con ellos.
linea 16 y 17 atrapamos el posible error que pueda ocurrir y ejecutamos la funcion: "displayError" para mostrarlo.
linea 21 a 29: aqui creamos la funcion flecha llamada "displayPosts" en esta obtenemos por medio del id la lista de posts y en ella utilizando un forEach agregamos en el documento una etiqueta <li> con cada uno de los posts.
linea 31 a 34 creamos la funcion flecha llamada displayError, en ella obtenemos el <div> con id: "error-message" y en el mostramos el posible error que pueda haber al hacer la peticion a la api.