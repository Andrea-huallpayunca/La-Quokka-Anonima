//window.addEventListener('load', base, true);
/*src/index.js: acá debes escuchar eventos del DOM, invocar cipher.encode() 
o cipher.decode() según sea necesario y actualizar el resultado en la UI.
 */
function base(){
    document.getElementById('mensaje').addEventListener('keyup', function () {
        
        this.value = this.value.toUpperCase();
    })
    
     document.getElementById('desplazar').addEventListener('keyup', function () {
           if (this.value>=1 && this.value!='') {
            this.value = parseInt(this.value) ;
           } else {
            this.value=''
           }

    })
}


base();

/*
function numeroMayor(){
    document.getElementById('desplazar').addEventListener('keyup', function () {
        this.value = this.value.min(['1']);
         })

} 
numeroMayor();
*/
import cipher from './cipher.js';

//let desplazar = document.getElementById('desplazar').value;

//let mensajeFinal =  document.getElementById('mensaje').value;
//let mensajeFinal = document.getElementById('mensajeResultante').value; 


document.getElementById('mostrar').onclick = function(){
    
    let passwordInput = document.getElementById('desplazar');

    // eslint-disable-next-line no-cond-assign, no-constant-condition
    if ( passwordInput.type=='password') {
      //  document.getElementById('mostrar').textContent = 'Ocultar';
       // passwordInput.type='text';
        document.getElementById('mostrar').textContent = 'Ocultar';
        passwordInput.type='number';
    }  else {
        document.getElementById('mostrar').textContent = 'Mostrar';
        passwordInput.type='password'; 
    }
}



document.getElementById('codificar').onclick= function () {
    document.getElementById('mensajeResultante').value =
    cipher.encode(document.getElementById('desplazar').value,document.getElementById('mensaje').value);
}

document.getElementById('decodificar').onclick= function () {
    document.getElementById('mensajeResultante').value =
    cipher.decode(document.getElementById('desplazar').value,document.getElementById('mensaje').value);
}


/*
-------------------------------------------------
document.querySelector('.campo span').addEventListener('click', e => {
    const passwordInput = document.querySelector('#password');
    if (e.target.classList.contains('show')) {
        e.target.classList.remove('show');
        e.target.textContent = 'Ocultar';
        passwordInput.type = 'text';
    } else {
        e.target.classList.add('show');
        e.target.textContent = 'Mostrar';
        passwordInput.type = 'password';
    }
});
/*
---------------------------------------------------

//document.getElementById('codificar').onclick= ;

//document.getElementById('decodificar').onclick=cipher.decode();

/*console.log(cipher);


document.getElementById('mensaje').onkeyup=function(){
   let mensaje= document.getElementById('mensaje').value;
   return mensaje.toUpperCase();
}

document.getElementById('mensaje').addEventListener('keyup') =
    function base(){
     document.getElementById('mensaje').value.toUpperCase();
    
 }
*/