function converterTemperatura(){

    var temperatura = document.getElementById("temperatura").value

    if(temperatura == ''){
        alert("Você precisa digitar uma temperatura!");
        return;
    }

    var escalas = document.getElementsByName('escala');
    if(escalas[0].checked){
        var temp_celsius = parseFloat(temperatura);
        var temp_farenheit = 1.8*temp_celsius + 32;
        var temp_kelvin = temp_celsius + 273;
    } else if (escalas[2].checked) {
        var temp_farenheit = parseFloat(temperatura);
        var temp_celsius = (temp_farenheit - 32) / 1.8;
        var temp_kelvin = temp_celsius + 273;
    } else if (escalas[3].checked) {
        var temp_kelvin = parseFloat(temperatura);
        var temp_celsius = temp_kelvin - 273
        var temp_farenheit = 1.8*temp_celsius + 32;
    }

    document.getElementById('valor_celsius').innerText = temp_celsius
    document.getElementById('valor_farenheit').innerText = temp_farenheit
    document.getElementById('valor_kelvin').innerText = temp_kelvin
    
    var backgroundColor = calcularCordeFundo(temp_celsius);
    document.body.style.backgroundColor = backgroundColor
}

function calcularCordeFundo(temperatura){
    var corInicial, corFinal;

    if (temperatura < 0){
        corInicial = [0,195,255];
        corFinal = [255,255,255];
        temperaturaMin = -1000;
        temperaturaMax = 0;
    } else {
        corInicial = [255,255,255];
        corFinal = [255,128,0];
        temperaturaMin = 0;
        temperaturaMax = 1000;
    }

    var t = (temperatura - temperaturaMin) / (temperaturaMax - temperaturaMin)

    var corIntermediaria = [];
    for (var i = 0; i < 3; i++){
        corIntermediaria[i] = Math.round((1 - t) * corInicial[i] + t * corFinal[i]); 
    }

    var rgb = 'rgb('+ corIntermediaria.join(',') + ')';
    return rgb;
}