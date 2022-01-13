window.addEventListener("load", ()=> {

    let formulario = document.querySelector('.formulario-sesion')

    formulario.addEventListener('submit', (e)=> {
       
        let errores =[]

        /*---------------------*/
       let email = document.querySelector('#email')

        if(email.value == ''){
            errores.push("El campo 'Email' debe estar completo.")
        }
        /*---------------------*/
        let password = document.querySelector('#password')

        if(password.value == ''){
            errores.push("El campo 'Contraseña' debe estar completo.")
        }else if(password.value.length < 8){
            errores.push("El campo 'Contraseña' debe tener al menos 8 caracteres.")
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