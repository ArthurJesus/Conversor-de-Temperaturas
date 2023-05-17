function converterTemperatura(){
    var temperatura = document.getElementById("temperatura").value
    if(temperatura == ''){
        alert("Você precisa digitar uma temperatura!");
        return;
    }
    var escalas = document.getElementsByName('escala');
    if(escalas[0].checked){
        //A temperatura que eu escolhi foi Celsius
        var temp_celsius = parseFloat(temperatura);
        var temp_farenheit = 1.8*temp_celsius + 32;
        var temp_kelvin = temp_celsius + 273;
    }else if (escalas[2].checked){
        //A temperatura que eu escolhi foi Farenheit
        var temp_farenheit = parseFloat(temperatura);
        var temp_celsius = (temp_farenheit - 32) / 1.8;
        var temp_kelvin = temp_celsius + 273;
    }else if (escalas[3].checked){
        //A temperatura que eu escolhi foi Kelvin
        var temp_kelvin = parseFloat(temperatura);
        var temp_celsius = temp_kelvin - 273
        var temp_farenheit = 1.8*temp_celsius + 32;
    }

    document.getElementById('valor_celsius').innerText = temp_celsius
    document.getElementById('valor_farenheit').innerText = temp_farenheit
    document.getElementById('valor_kelvin').innerText = temp_kelvin
    
    var red = Math.round(255 * (temperatura/100));
    var green = Math.round(255 * (100 - temperatura/100));
    var blue = 0;

    var rgbColor = "rgb(" + red + "," + green + "," + blue + ")";
    document.body.style.backgroundColor = rgbColor;
}