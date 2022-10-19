window.addEventListener("load",  (e)=> {
  let form = document.querySelector("form.datos");

  form.addEventListener =
    ("submit",
    function (e) {
      e.preventDefault();
      /*     console.log("se envio el form") */

      let errores = [];

      let nombreProducto = document.querySelector(".nombreProducto");

      if (nombreProducto.value == "") {
        errores.push("Debes asignar un NOMBRE al producto");
      };
      if (nombreProducto.value.length < 5) {
        errores.push(
          "Debes asignar un NOMBRE de al menos 5 caracteres al producto"
        );
      }

      let precioProducto = document.querySelector(".precioProducto");

      if (precioProducto.value == "") {
        errores.push("Debes asignar un PRECIO al producto");
      }

      let descripcionProducto = document.querySelector(".descripcionProducto");

      if (descripcionProducto.value == "") {
        errores.push("Debes realizar una descripcion del producto");
      }
      if (descripcionProducto.value.length < 10) {
        errores.push(
          "Debes realizar una DESCRIPCION de al menos 10 caracteres del producto"
        );
      }
      if (errores.length > 0) {

        let ulErrores = document.querySelector("div.errores");
        for (let i = 0; i < errores.length; i++) {
          ulErrores.innerHTML += "<li>" + errores[i] + "</li>";
        }
      }
    });
});
