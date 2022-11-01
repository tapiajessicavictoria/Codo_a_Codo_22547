//Defino valor de entrada.
const valorTicket = 200;

//Descuentos segun categoria.

var descuentoEstudiante = 80;
var descuentoTrainee    = 50;
var descuentoJunior     = 15;

//capturar en variables mis datos
var nombre          = document.getElementById("nombre");
var apellido        = document.getElementById("apellido");
var mail            = document.getElementById("email");
var cantidadTickets = document.getElementById("cantidadTickets");
var categoria       = document.getElementById("categoriaSelect");

function totalPagar(){

    if(nombre.value===""){
         alert("Verificar nombre");
        nombre.classList.add("is-invalid");
         nombre.focus();
         return;
     }

    if(apellido.value===""){
        alert("Verificar apellido");
        apellido.classList.add("is-invalid");
        apellido.focus();
        return;
    }

    if(mail.value===""){
        alert("Verificar correo");
        mail.classList.add("is-invalid");
        mail.focus();
        return;
    }

        //Para determinar si el correo electronico es valido o no.
    const emailValido = mail  =>{
            return /^[^\s@]+@[^/s@]+\.[^\s@]+$/.test(mail);
    }
        
    if(!emailValido(mail.value)){
            alert("Escriba un mail valido");
            mail.classList.add("is-invalid");
            mail.focus();
        return;
    }

        //verifica la cantidad de entradas.
    if((cantidadTickets.value<=0)){
            alert("Verifique la cantidad de entrada");
            cantidadTickets.classList.add("is-invalid")
            cantidadTickets.focus();
            return;
    }

    if(categoria.value===""){
            alert("Verifique categoria");
            categoria.classList.add("is-invalid");
            categoria.focus();
            return;
     }

         var totalValorTickets=(cantidadTickets.value*valorTicket);
         //clasificar descuentos segun categoria.
        if(categoria.value==0){
             totalValorTickets=totalValorTickets;
         }

        if(categoria.value==1){
             totalValorTickets=totalValorTickets-(descuentoEstudiante/100*totalValorTickets);
         }
        
        if(categoria.value==2){
            totalValorTickets=totalValorTickets-(descuentoTrainee/100*totalValorTickets);
        }
        
        if(categoria.value==3){
             totalValorTickets=totalValorTickets-(descuentoJunior/100*totalValorTickets);
        } 

        totalPago.innerHTML=totalValorTickets;

        }


//funcion que limpie los controles.
function reset(){   
    totalPago.innerHTML="";
}

//evento de escucha del boton resumen.

boton1.addEventListener("click",reset);

//evento de escucha del boton borrar.
boton2.addEventListener("click",totalPagar);