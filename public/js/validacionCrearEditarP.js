window.addEventListener("load", function() {
    let focoForm = document.querySelector('#nombre');
    focoForm.focus();

    let formulario = document.querySelector('form.agregar-producto');

    formulario.addEventListener('submit', function(e) {
       
        let errores =[];

        let nombre = document.querySelector('#nombre');
        if(nombre.value == ''){
            errores.push("Debes completar el nombre del producto");
            nombre.classList.add('error-validacion');
        }else if(nombre.value.length < 5){
            errores.push("El nombre del producto debe tener al menos 5 caracteres");
            nombre.classList.add('error-validacion');
        }
        
        let descripcion = document.querySelector('#descripcion');
        if(descripcion.value == ''){
            errores.push("Debes completar la descripción del producto");
            descripcion.classList.add('error-validacion');
        }else if(descripcion.value.length < 20){
            errores.push("La descripción del producto debe tener al menos 20 caracteres");
            descripcion.classList.add('error-validacion');
        }
        
        let precio = document.querySelector('#precio');
        if(precio.value == ''){
            errores.push("Debes completar el precio del producto");
            precio.classList.add('error-validacion');
        }else if(isNaN(precio.value)){
            errores.push("El precio debe ser numérico");
        }

        //AGREGAR VALIDACIÓN DE LA FOTO

        let categoria = document.querySelector('#categoria');
        if(categoria.value == ''){
            errores.push("Debes seleccionar la categoría del producto");
            categoria.classList.add('error-validacion');
        }       
        
        let ulErrores = document.querySelector('.erroresFormulario ul');
        ulErrores.innerHTML = "";

        if(errores.length > 0){
            e.preventDefault();
                        
            for(let i = 0; i < errores.length; i++){
                ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
            }
        }
    });
});