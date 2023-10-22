//o argumneto callback dentro da fução calcularIMC é o mesmo que a função Call e vice-versa.
const CalcularIMC = function(callback){
    let peso = document.getElementById("peso").value;
    let altura =document.getElementById("altura").value;

    peso = parseFloat(peso);
    altura = parseFloat(altura);
    
    let imc = peso / (altura * altura);
    imc = Math.trunc(imc);

    let classificacão = Call(imc)
 
    if(isNaN (imc) || isNaN (peso) || isNaN (altura)){
        throw new Error("Parametros invalidos foram inseridos") && alert("parametros invalidos")
    } else{
        alert(`Seu imc está em: ${imc}`)

        callback(imc, classificacão)
    }
}

const Call = function(imc){

    let classificação;

    if (imc <= 16.9){
         classificação = "Muito abaixo do peso de 16 a 16,9 kg/m2";
    } else if(imc <= 18.4){
         classificação = "Abaixo do peso 17 a 18,4 kg/m2";

    } else if (imc <= 24.9) {
         classificação = "Peso normal 18,5 a 24,9 kg/m2";

    } else if (imc <= 29.9){
         classificação = "Acima do peso 25 a 29,9 kg/m2";

    } else if (imc <= 34.9){
         classificação = "Obesidade Grau I 30 a 34,9 kg/m2";

    } else if (imc <= 40){
         classificação = "Obesidade Grau II 35 a 40 kg/m2";

    } else {
         classificação = "Obesidade nivel III com 40 kg/m2";
    }

     alert(classificação)
   }



document.getElementById("botão").addEventListener("click", CalcularIMC);

 

























