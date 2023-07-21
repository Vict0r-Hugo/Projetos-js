const cartas = ['8', '3', '1', 'Q', '2', '7','K', '10', '4', '9', 'J', '6', '5']
let adccarta = ''
let rmvcarta = ''
let opcao = ''

do{

    opcao = parseFloat(prompt('Quantidade de cartas: ' +cartas.length + '\n' +
    'O que deseja fazer?\n' +
    '1.Adicionar uma carta\n'+
    '2. Puxar uma carta\n' +
    '3. Sair' ))

    switch (opcao) {
        case 1:
            adccarta = (prompt('Qual carta deseja inserir?'))  
            cartas.unshift(adccarta)
            break;
        case 2:
            rmvcarta = cartas.shift()
            if(rmvcarta){
            alert('Carta de naipe ' + rmvcarta + ' puxada!')
            }
            else{
                alert('Não a carta a ser puxada')
            }
            break;
        case 3:
            alert('Saindo...')
            break;
        default:
            alert('Selecione uma opção valida!')
            break;
    }
}
while( opcao !== 3)