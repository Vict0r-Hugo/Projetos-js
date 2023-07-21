const imoveis  = []
let opcao = ''  

do{
  
    opcao = parseFloat(prompt( 'Olá, existe ' + imoveis.length + ' imoveis cadastrados!\n' +
    'MENU\n' +
    '1. Salvar um imovel.\n' +
    '2. Mostrar imoveis salvos.\n' +
    '3. Sair'))

    switch (opcao) {
        case 1:
            const imovel = {}
            imovel.nomePropri = prompt('Qual o nome do Proprietario?')
            imovel.quartos = prompt('Qual a quantidade de quartos?')
            imovel.banheiro = prompt('Qual a quantidade de banheiros?')
            imovel.garagem = prompt('Possui garagem? (Sim/Não)')  
            
            const confir = confirm('Salvar Imovel?' + '\n'+
            'proprietario: ' + imovel.nomePropri +' \n' +
            'Numero de quartos: ' + imovel.quartos + '\n' +
            'Numero de banehiros: ' + imovel.banheiro + '\n' +
            'Possui garagem: ' + imovel.garagem)
            
            if(confir){
                imoveis.push (imovel) 
            }
            else{
                alert('Voltando ao menu!')
            }
        break;
        case 2:
            for( let i = 0 ; i< imoveis.length; i++){
                if(!imoveis){
                    alert('Não há imoveis salvos')
                }
                else{
                    alert('Imovel: ' + (i + 1) + '\n'+
                    'proprietario: ' + imoveis[i].nomePropri +' \n' +
                    'Numero de quartos: ' + imoveis[i].quartos + '\n' +
                    'Numero de banehiros: ' + imoveis[i].banheiro + '\n' +
                    'Possui garagem: ' + imoveis[i].garagem)
                }
            }
         break;
            case 3:
                alert('Saindo...')
                break;
    
        default:
            alert('Insira um codigo válido!!!')
        break;
    }
}
while(opcao !== 3)