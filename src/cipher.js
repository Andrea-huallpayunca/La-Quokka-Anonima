 /* src/cipher.js: acá debes implementar el objeto cipher, el cual 
ya está exportado en el boilerplate. Este objeto (cipher) debe contener dos métodos:
cipher.encode(offset, string): offset es el número de posiciones que queremos 
mover a la derecha en el alfabeto y string el mensaje (texto) que queremos cifrar.
cipher.decode(offset, string): offset es el número de posiciones 
que queremos mover a la izquierda en el alfabeto y string el mensaje (texto) que queremos descifrar.
*/

const cipher = { 
  encode: function(mover,mensaje){
   // mover = document.getElementById('desplazar').value;
   // mensaje = document.getElementById('mensaje').value;
    let letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let resultado = '';
    // agregando en ves de* mover=(mover%26+26)%26;
    if(mensaje && mover){
    for (let index = 0; index < mensaje.length; index++) {
     // let extraer = mensaje.slice(index); 'al parecer al extraer 
     //parte del mensaje este se modifica, cambiando el resultado final.
      let extraer = mensaje[index] ;
      let posición = letras.indexOf(extraer);
     // agregando en ves de* let nuevaPosicion = (posición+(mover))%26;
     let nuevaPosicion = (posición+(mover%26))%26;
     // eslint-disable-next-line no-unused-vars
     resultado += letras[nuevaPosicion];
}
// ((letras.indexOf(mensaje[index])+mover%26)26)
      //const element = array[index];
      //index
      return resultado;
    } 
   throw new TypeError("Ingrese una clave y un mensaje");
  
  },
  decode: function(mover,mensaje){
  
     let letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
     let resultado = '';
    
     if(mensaje && mover){
     for (let index = 0; index < mensaje.length; index++) {
   
       let extraer = mensaje[index] ;
       let posición = letras.indexOf(extraer);
      
      let nuevaPosicion = (26+(posición-(mover%26)))%26;
      
      resultado += letras[nuevaPosicion];
 }
return resultado;
       
     } 
     throw new TypeError("Ingrese una clave y un mensaje");
   }






 /* codificar(mover,mensaje){
    mover = document.getElementById('desplazar').value;
    mensaje = document.getElementById('mensaje').value;
    
  //let letras = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  let letras = ['ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'];
  if (!mensaje) {
   for(var i=0; i<mensaje.length; i++){
 let extraer = mensaje.slice(i,i+1);
 let posición = letras.indexOf(extraer);
 let nuevaPosicion = (posición+(mover%27))%27;
   document.getElementById('mensajeResultante').value = mensaje.replace(extraer , letras.slice(nuevaPosicion,nuevaPosicion+1));
   }
   
  }
}
------
  decode(offset,string){

  },

};
*/
}
export default cipher;
