function converterTemperatura() {
    var temperatura = parseFloat(document.getElementById("temperatura").value);
    var unidadeOrigem = document.getElementById("unidadeOrigem").value;
    var unidadeDestino = document.getElementById("unidadeDestino").value;
    var resultado;
  
    if (unidadeOrigem === "celsius") {
      if (unidadeDestino === "fahrenheit") {
        resultado = (temperatura * 9 / 5) + 32;
      } else if (unidadeDestino === "kelvin") {
        resultado = temperatura + 273.15;
      } else {
        resultado = temperatura;
      }
    } else if (unidadeOrigem === "fahrenheit") {
      if (unidadeDestino === "celsius") {
        resultado = (temperatura - 32) * 5 / 9;
      } else if (unidadeDestino === "kelvin") {
        resultado = (temperatura + 459.67) * 5 / 9;
      } else {
        resultado = temperatura;
      }
    } else if (unidadeOrigem === "kelvin") {
      if (unidadeDestino === "celsius") {
        resultado = temperatura - 273.15;
      } else if (unidadeDestino === "fahrenheit") {
        resultado = temperatura * 9 / 5 - 459.67;
      } else {
        resultado = temperatura;
      }

    } 
    
    else {
      resultado = temperatura;
    }
  
    document.getElementById("resultado").innerHTML = resultado.toFixed(2);
  
    var body = document.querySelector("body");
    if (unidadeDestino === 'celsius') {
        if (resultado >= 30) {
            body.style.backgroundColor = "red";
        }
        else if (resultado < 30 && resultado > 25) {
            body.style.backgroundColor = "orange";
        }
        else if (resultado < 25 && resultado > 18) {
            body.style.backgroundColor = "rgb(211, 223, 43)";//amarelo
        }
        else if (resultado < 18 && resultado > 8) {
            body.style.backgroundColor = "rgb(25, 149, 231)";//azul
        }
        else if (resultado < 8) {
            body.style.backgroundColor = "rgb(144, 88, 207)";//roxo
        }
    }

    var body = document.querySelector("body");
    if (unidadeDestino === 'fahrenheit') {
        if (resultado >=86 ) {
            body.style.backgroundColor = "red";
        }
        else if (resultado <86 && resultado > 77 ) {
            body.style.backgroundColor = "orange";
        }
        else if (resultado <77 && resultado > 65.40) {
            body.style.backgroundColor = "rgb(211, 223, 43)";//amarelo
        }
        else if (resultado <65.40 && resultado > 46.40) {
            body.style.backgroundColor = "rgb(25, 149, 231)";//azul
        }
        else if (resultado <46.40) {
            body.style.backgroundColor = "rgb(144, 88, 207)";//roxo
        } 
    }

    var body = document.querySelector("body");
    if (unidadeDestino === 'kelvin') {
        if (resultado >=303.15 ) {
            body.style.backgroundColor = "red";
        }
        else if (resultado <303.15 && resultado > 298.15) {
            body.style.backgroundColor = "orange";
        }
        else if (resultado <298.15 && resultado > 291.15) {
            body.style.backgroundColor = "rgb(211, 223, 43)";//amarelo
        }
        else if (resultado <291.15 && resultado > 281.15) {
            body.style.backgroundColor = "rgb(25, 149, 231)";//azul
        }
        else if (resultado <281.15) {
            body.style.backgroundColor = "rgb(144, 88, 207)";//roxo
        } 
    } 

}
