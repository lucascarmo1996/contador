/*var formulario = window.getElementById ('formulario')
var botao = window.getElementById('contar')


var msg = window.getElementById ('msg')


var numero = 
var nfim = 
var passo = 
var resultado = ' '

*/


function contar() {
 
    var numero = window.document.getElementById('num')
    var nfim = window.document.getElementById ('nfim')
    var passo = window.document.getElementById ('passo')
    var res = window.document.getElementById('res')

    if(numero.value.length == 0 || nfim.value.length == 0 || passo.value.length == 0) {
        //window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossivel contar!'


    } else {
        res.innerHTML = 'Contando...'
        var i = Number(numero.value)
        var f = Number(nfim.value)
        var p = Number(passo.value)
        
        if (p <= 0 ){

            window.alert('Passo invalido! Considerando o PASSO 1')
            p = 1

        }
       
        if (i < f){
            //Contagem crescente
            for(var contador = i ; contador <= f ; contador += p){
            res.innerHTML += ` ${contador} \u{1F449}`
            }
            
        } else {
            //Contagem regressiva
            for(var contador = i ; contador >= f ; contador -= p ){
                res.innerHTML += `${contador} \u{1F449}`
            }
            
        }

        res.innerHTML += `\u{1F3C1}`


        

    }

}