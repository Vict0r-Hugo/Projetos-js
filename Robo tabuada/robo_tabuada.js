let contador = parseFloat(prompt('Insira um numero:'))
let final = ''
for ( let i = 1 ; i <= 20 ; i++ ){
     let resultado = contador * i
    final += contador + ' x ' + i + ' = ' + resultado + '\n'
}
alert(
        'Resultado:\n' + final + '\n' +'Agradecemos por usar o robo tabuada!\n' 
    )