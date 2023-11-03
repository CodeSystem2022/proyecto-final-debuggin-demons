


//Expresiones regulares
//Expresion regular para email
///^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 

//Expresion para nombres y apellidos
//^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$

function checkPass() {
    let valContraseña = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/;
    

    let contraseña = document.querySelector('#contraseña').value;
    let mensaje = document.querySelector('#mensaje');

    if (valContraseña.test(contraseña)) {
        mensaje.textContent = 'Contraseña correcta';

    }else {
        mensaje.textContent = 'Contraseña incorrecta'
    }
}

