//while: enquanto, o que está entre parenteses é a condição
//enquanto a condição for verdadeira faça algo
function Tabuada(){
    let contador = 0
    let n1 = document.getElementById("n1").value
    document.getElementById("resposta").innerHTML = ""
    while (contador <= 10){
        document.getElementById("resposta").innerHTML += n1 + "X" + contador + "=" + contador*n1 + "<br>"
        contador = contador + 1
        //ou contador++
    }
}
