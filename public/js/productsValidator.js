window.addEventListener("load", () => {
    e.preventDefault();
  let form = document.querySelector("form");

  let titulo = document.querySelector(".nombreProducto");
  let precio = document.querySelector(".precioProducto");
  let descripcion = document.querySelector(".descripcionProducto");
  let imagen = document.querySelector(".imagen-producto");

  form.addEventListener("submit", (e) => {
    let errores = []; //Array que conservara los errores de tenerlos

    if (titulo.value == "") {
      errores.push("Debes completar el campo de Titulo del producto");
      /* console.log(titulo.value); */
    }

    if (precio.value == "") {
      errores.push("Debes completar el campo de Precio");
    }

    if (descripcion.value == "") {
      errores.push("Debes agregar una descripcion del producto");
    } else if (descripcion.value.length < 15) {
      errores.push("El campo de descripcion debe ser superior a 15 caracteres");
    }

    if (imagen.value == "") {
      errores.push("Debes agregar una Imagen del producto");
    }

    if (errores.length > 0) {

      let ulErrores = document.querySelector("div.errores ul");
      ulErrores.innerHTML = ""; //para que cada vez que refresquemos el array siempre este vacio y no se acumulen los errores cada vez que toco el boton submit
      for (let i = 0; i < errores.length; i++) {
        ulErrores.innerHTML += "<li>" + errores[i] + "</li>";
      }
    }
  });
});
