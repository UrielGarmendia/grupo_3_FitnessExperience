window.addEventListener("load", function () {
  let form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    let errores = [];

    let nombreProducto = document.querySelector(".nombreProducto");

    if (nombreProducto.value == "") {
      errores.push("Debes asignar un NOMBRE al producto");
    } else if (nombreProducto.value.lenght < 5) {
      errores.push(
        "Debes asignar un NOMBRE de al menos 5 caracteres al producto"
      );
    }

    let precioProducto = document.querySelector(".precioProducto");

    if (precioProducto.value == "") {
      errores.push("Debes asignar un PRECIO al producto");
    }

    let descripcionProducto = document.querySelector(".descripcionProducto");

    if(descripcionProducto.value == ""){
        errores.push("Debes realizar una descripcion del producto")
    } else if (descripcionProducto.value.lenght < 20) {
      errores.push(
        "Debes realizar una DESCRIPCION de al menos 20 caracteres del producto"
      );

    let imagenProducto = document.querySelector(".imagen-producto");



    } else if (errores.lenght > 0) {
      e.preventDefault();
      let ulErrores = document.querySelector(".errores ul");
      errores.forEach((error) => {
        ulErrores.innerHTML += `<li>${error}</li>`;
      });
    }
  });
});
