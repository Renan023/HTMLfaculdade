window.alert('Olá, vamos fazer a atividade 03')//alerta
var nome = window.prompt('Qual seu nome?')//string guardada na variavel
window.alert(`Muito prazer, ${nome}`)//concatenação

function somar(){
    var txt1 = document.getElementById('txtn1')
    var txt2 = document.getElementById('txtn2')
    var res = document.getElementById('res')
    var v1 = Number(txt1.value)
    var v2 = Number(txt2.value)
    var s = v1+v2
    res.innerHTML = `A soma dos valores é ${s}.`
}

function subtrair(){
    var txt1 = document.getElementById('txtn1')
    var txt2 = document.getElementById('txtn2')
    var res = document.getElementById('res')
    var v1 = Number(txt1.value)
    var v2 = Number(txt2.value)
    var sb = v1-v2
    res.innerHTML = `A subtração dos valores é ${sb}.`
}

function multiplicar (){
    var txt1 = document.getElementById('txtn1')
    var txt2 = document.getElementById('txtn2')
    var res = document.getElementById('res')
    var v1 = Number(txt1.value)
    var v2 = Number(txt2.value)
    var m = v1*v2
    res.innerHTML = `A multiplicação dos valores é ${m}.`
}

function dividir(){
    var txt1 = document.getElementById('txtn1')
    var txt2 = document.getElementById('txtn2')
    var res = document.getElementById('res')
    var v1 = Number(txt1.value)
    var v2 = Number(txt2.value)
    var d = v1/v2
    res.innerHTML = `A divisão dos valores é ${d}.`
}

function potencia (){
    var txt1 = document.getElementById('txtn1')
    var txt2 = document.getElementById('txtn2')
    var res = document.getElementById('res')
    var v1 = Number(txt1.value)
    var v2 = Number(txt2.value)
    var pot = Math.pow(v1,v2)
    res.innerHTML = `A potência dos valores é ${pot}.`             
}

function raiz (){
    var txt3 = document.querySelector('input#txtn3')
    var res = document.getElementById('resd')
    var v3 = Number(txt3.value)
    var rq = Math.sqrt(v3)
    res.innerHTML = `A raiz quadrada do valor é ${rq}.`             
}

function cosseno(){
    var txt3 =document.getElementById('txtn3')
    var res = document.getElementById('resd')
    var v3 = Number(txt3.value)
    var cs = Math.cos(v3)
    res.innerHTML = `O cosseno do valor é ${cs}.`
}

function seno (){
    var txt3 = document.getElementById('txtn3')
    var res = document.getElementById('resd')
    var v3 = Number(txt3.value)
    var sn = Math.sin(v3)
    res.innerHTML = `O seno do valor é ${sn}.`
}

function maxima(){
    var txt4 = document.getElementById('txtn4')
    var txt5 = document.getElementById('txtn5')
    var txt6 = document.getElementById('txtn6')
    var res = document.getElementById('resm')
    var v4 = Number(txt4.value)
    var v5 = Number(txt5.value)
    var v6 = Number(txt6.value)
    var mx = Math.max(v4,v5,v6)
    res.innerHTML = `A Máxima dos valores é ${mx}.`
}

function minima (){
    var txt4 = document.getElementById('txtn4')
    var txt5 = document.getElementById('txtn5')
    var txt6 = document.getElementById('txtn6')
    var res = document.getElementById('resm')
    var v4 = Number(txt4.value)
    var v5 = Number(txt5.value)
    var v6 = Number(txt6.value)
    var mn = Math.min(v4,v5,v6)
    res.innerHTML = `A Mínima dos valores é ${mn}.`
}
