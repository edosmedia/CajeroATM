let botones_pad = document.querySelectorAll(".btn-numeros");
let btn_enter1 = document.getElementById("btn-enter");
let btn_borrar = document.getElementById("btn-borrar");
let password = 1234;
let digitos = "";
// let tecla = 0;

botones_pad.forEach(boton => {
   boton.addEventListener('click', () =>{

    digitos += boton.innerHTML; 
    // console.log('variable digitos ' + digitos);
    tecla = Number(digitos); 
    // console.log('variable tecla ' + tecla);
    
   })

});


      btn_enter1.addEventListener("click", () => {
        alert('Enter')
        if (password === tecla) {
         alert('Entraste');
        }else {
          alert('No hay clave');
        }

        console.log(tecla);
      });

function validarpass() {
  btn_enter1
}

// function borrar(){
//   tecla = 0;
//   return tecla;
// }
//  switch (btn_enter1) {
//    default:
//    console.log('ejecutado');
// }
