let opcao = ''
let resultado = ''
function areaDoTriangulo(b, a) {
    return (b * a) / 2

}
function areaDoRetangulo (b, a) {
    return (b * a)
}
function areaDoQuadrado(l) {
    return (l * l) 
}
function areaDotrapezio (bMaior, bMenor, a) {
    return (bMaior + bMenor) * a / 2
}
function areaDoCirculo (r) {
    return 3,14 * r * r
}

do{
    opcao = prompt('Bem vindo a calculadora geométrica!\n'+
'Selecione a opção de cálculo:\n'+
'1. Caucular a area do triângulo \n' +
'2. Caucular a area do retângulo\n' +
'3. Caucular a area do quadrado\n' +
'4. Caucular a area do trapézio\n' +
'5. Caucular a área do círculo\n' +
'6. sair') 

switch (opcao) {
    case '1':
        resultado = areaDoTriangulo(prompt('Insira o valor da base do triângulo:'), prompt('Insira o valor da altura do triângulo:'))
        alert('A area do triângulo é '+ resultado)
        break;
    case '2':
        resultado = areaDoRetangulo(prompt('Insira o valor da base do retângulo:'), prompt('Insira o valor da altura do retângulo:'))
        alert('A area do retângulo é '+ resultado)
        break;
    case '3':
        resultado = areaDoQuadrado(prompt('Insira o valor do lado do quadrado:'))
        alert('A area do quadrado é '+ resultado)
        break;
    case '4':
        resultado = areaDotrapezio (parseFloat(prompt('Insira a base maior do trapézio:')), parseFloat(prompt('Insira a base menor do trapézio:')), prompt('Insira a altura do trapézio:'))
        alert('A area do trapézio é '+ resultado)
        break;
    case '5':
        resultado = areaDoCirculo(prompt('Insira o raio do círculo:'))
        alert('A area do círculo é '+ resultado)
        break;
    case '6':
        alert('Saindo...')
        break;

    default:
        alert('Insira um codigo válido!!!')
        break;
}
}
while(opcao !== '6')