<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aula</title>
    <style>
        *{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }
        body{
            background-color: antiquewhite;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }

        form{
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
        }

        input[type='number']{
            height: 40px;
            font-size: 20px;
            font-weight: bold;
            color: blue;
            text-align: center;
            margin-bottom: 30px;
        }
        input[type='number']::placeholder{
            color: lightslategray;
            text-align: center;
        }
        input[type='number']::-webkit-outer-spin-button,input[type='number']::-webkit-inner-spin-button{
            -webkit-appearance: none;
        }

        input[type=range]{
            margin-bottom: 30px;
        }

        form > fieldset{
            margin-bottom: 10px;
            display: flex;
            border: none;
            width: 100%;
            justify-content: space-evenly;
        }

        section#valores{
            display: flex;
            width: 100% ;
            align-items: center;
            justify-content: space-evenly;
            margin-top: 30px;
        }
        section div{
            border: 1px solid black;
            width: 150px;
            height: 150px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: lightseagreen;
        }
    </style>
</head>
<body>
    <form action="">
        <fieldset>
            <input type="radio" name="escala" id="celsius" value="celsius" checked>
            <label for="celsius">ºC</label>
            <input type="radio" name="escala" id="farenheit" value="farenheit">
            <label for="farenheit">ºF</label>
            <input type="radio" name="escala" id="kelvin" value="kelvin">
            <label for="kelvin">K</label>
        </fieldset>
        <input type="number" id="temperatura" name="temperatura" placeholder="Digite a temperatura">
        
        <input type="range">

        <input type="button"  value="Converter" onclick="converterTemperatura()">
    </form>

    <section id="valores">
        <div id="valor_celsius">
            <h5>Valor Celsius</h5>
        </div>
        <div id="valor_farenheit">
            <h5>Valor Farenheit</h5>
        </div>
        <div id="valor_kelvin">
            <h5>Valor Kelvin</h5>
        </div>
    </section>

    <script>
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
            

            if (temp_celsius < 0){
                document.getElementsByTagName('body')[0].style.backgroundColor = 'lightblue';
            }else if (temp_celsius >= 0 && temp_celsius <= 30){
                document.getElementsByTagName('body')[0].style.backgroundColor = 'lightsalmon';
            }else if (temp_celsius > 30){
                document.getElementsByTagName('body')[0].style.backgroundColor = 'lightcoral';
            }
        }
    </script>

</body>
</html>