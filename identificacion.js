

function idd (user, password){
    switch (true) {
        case (user == 'admin' && password == 1234):
            console.log('Bien venido a nuestro sitio');
            break;
        case (user == 'admin' && password != 1234):
            console.log('Contraseña incorrecta');
            break;  
            
        case (user != 'admin' && password == 1234):
            console.log('Usuario incorrecto');
            break;    
        case (user != 'admin' && password != 1234):
            console.log('Usuario y contraseña incorrectos');
            break;    
                 
    
        default:
            console.log('Debe ingresar los datos requeridos');
            break;
    }

}
idd('admin', 1234);