function consultar() {
    alert("Gracias por tu interés, un vendedor se comunicará pronto.");
}
 
 


function validarFormulario() {
 
    
    var nombre = document.getElementById("nombre").value;
 
  
    if (nombre == "") {
        
        alert("Por favor, completá el campo Nombre antes de enviar el mensaje.");
 
    } else {
        
        alert("¡Mensaje enviado! Gracias, " + nombre + ". Te vamos a responder pronto.");
    }
 
}

function calcularCuota() {
    var precio  = parseFloat(document.getElementById("autoElegido").value);
    var entrega = parseFloat(document.getElementById("entrega").value);
    var cuotas  = parseInt(document.getElementById("cuotas").value);

    
    if (entrega < 0) {
        alert("La entrega no puede ser negativa.");
    } else if (entrega >= precio) {
        alert("La entrega no puede ser mayor o igual al precio del auto.");
    } else {
        var saldo         = precio - entrega;                  
        var interes       = saldo * 0.03 * cuotas;             
        var totalAPagar   = saldo + interes;                   
        var cuotaMensual  = totalAPagar / cuotas;              

        var resultado = document.getElementById("resultadoSimulador");

      
        resultado.innerHTML =
            "<strong>Resultado del Simulador:</strong><br>" +
            "Precio del auto: U$D " + precio + "<br>" +
            "Entrega inicial: U$D " + entrega + "<br>" +
            "Saldo a financiar: U$D " + saldo + "<br>" +
            "Interés total (3% x mes): U$D " + interes + "<br>" +
            "Total a pagar en cuotas: U$D " + totalAPagar + "<br>" +
            "<strong style='color:#ff4444;'>-> Cuota mensual: U$D " + cuotaMensual + "</strong>";
    }
}
