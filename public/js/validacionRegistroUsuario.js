window.addEventListener("load", ()=> {

    let formulario = document.querySelector('.formulario-registro')

    formulario.addEventListener('submit', (e)=> {
       
        let errores =[]

        /*---------------------*/
        let nombre = document.querySelector('#nombre')

        if(nombre.value == ''){
            errores.push("El campo 'Nombre' debe estar completo.")
            nombre.classList.add('error-validacion');
        }else if(nombre.value.length < 2){
            errores.push("El campo 'Nombre' debe tener al menos 2 caracteres|.")
            nombre.classList.add('error-validacion');
        }
        /*---------------------*/
        let apellido = document.querySelector('#apellido')

        if(apellido.value == ''){
            errores.push("El campo 'Apellido' debe estar completo.")
            apellido.classList.add('error-validacion');
        }else if(apellido.value.length < 2){
            errores.push("El campo 'Apellido' debe tener al menos 2 caracteres|.")
            apellido.classList.add('error-validacion');
        }
        /*---------------------*/
        let email = document.querySelector('#email')

        if(email.value == ''){
            errores.push("El campo 'Email' debe estar completo.")
            email.classList.add('error-validacion');
        }
        /*---------------------*/
        let categoria = document.querySelector('#catUsuario')

        if(categoria.value == ''){
            errores.push("El campo 'Categoria' debe estar completo.")
            categoria.classList.add('error-validacion');
        }else if(password.value.length < 8){
            errores.push("El campo 'Categoria' debe tener al menos 8 caracteres|.")
            categoria.classList.add('error-validacion');
        }
        /*---------------------*/
        let password = document.querySelector('#password')

        if(password.value == ''){
            errores.push("El campo 'Contraseña' debe estar completo.")
            password.classList.add('error-validacion');
        }else if(password.value.length < 8){
            errores.push("El campo 'Contraseña' debe tener al menos 8 caracteres|.")
            password.classList.add('error-validacion');
        }
        /*---------------------*/
        let password2 = document.querySelector('#password')

        if(password2.value == ''){
            errores.push("El campo 'Repeti tu Contraseña' debe estar completo.")
            password2.classList.add('error-validacion');
        }else if(password2.value.length < 8){
            errores.push("El campo 'Repeti tu Contraseña' debe tener al menos 8 caracteres|.")
            password2.classList.add('error-validacion');
        }
        /*---------------------*/
        let foto = document.querySelector('#fotoPerfil')
        let acceptedExtensions = ['jpg', 'jpeg', 'png', 'gif']; 
        let fileExtension = foto.value.split('.').pop();//split()parte un string de acuerdo al parametro que le pase y devuelve un array con cada parte. pop devuelve el ultimo elemento del array
       
        if(foto.value == ''){
            errores.push("Debes agregar una foto del producto");
            foto.classList.add('error-validacion');
        }else if(!acceptedExtensions.includes(fileExtension)){
            errores.push("Las extensiones de archivo permitidas son '.jpg', '.jpeg', '.png', '.gif'");
        }  


        if(errores.length > 0){
            e.preventDefault()

            let ulErrores = document.querySelector('.errores')
            
            for(var i = 0; i < errores.length; i++){

                ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
            }
        }




    })



})