const vagas = []
function ListaVagasDisponiveis(){
 const listaVagas = vagas.reduce(function(ReduzidaVaga , vaga, index){
    ReduzidaVaga += index + '. '
    ReduzidaVaga += vaga.nome 
    ReduzidaVaga += ' (' + vaga.candidatos.length + ' candidatos.)\n'
    return ReduzidaVaga
 } , '' )
 alert(listaVagas)
}


function CriarUmaNovaVaga (){
        const nome = prompt('Qual o nome da vaga?')
        const descricao = prompt('Insira a descrição da vaga:')
        const data = prompt('Insira a data limite da vaga:')
        
        const confir = confirm('Salvar vaga?\n'+
        'Nome da vaga: '+ nome + '\n' +
        'Descrição da vaga: '+ descricao + '\n' +
        'Data limite da vaga: '+ data + '\n' ) 
        if (confir) {
            const vaga = { nome, descricao, data, candidatos: [] }
            vagas.push(vaga)
            alert('Vaga criada!')
        }
        else{
            alert('Voltando ao menu!!!')
        }
}

function exibirVaga(){
    const indice = prompt('Qual vaga deseja exibir?')   
    const vaga = vagas[indice]
    const candidatos_ = vaga.candidatos.reduce(function(textocandidato, candidato){
        return textocandidato + '\n -' + candidato
    }, '' )
 alert('Vaga nº' + indice + '\n' +
 'Nome: ' + vaga.nome + '\n' +
 'Descrição: ' + vaga.descricao + '\n' +
 'Data limite: ' + vaga.data + '\n' +
 'Quantidade de candidatos: ' + vaga.candidatos.length + '\n' +
 'Nome dos candidatos: ' + candidatos_ )
}

function inscreverCandidato(){
    const candidato = prompt('Qual o nome do candidato?')
    const indice = prompt('Qual o indice da vaga?')
    const vaga = vagas[indice]
    
    const confir = confirm('Deseja inscrever ' + candidato + ' na vaga '+ indice + '?\n' +
    'Nome: '+ vaga.nome + '\n' +
    'Descrição: ' + vaga.descricao + '\n' + 
    'Data limite: ' + vaga.data )

    if (confir){
        vaga.candidatos.push(candidato)
        alert('Iscrição efetuada!')
    }
}

function excluirVaga (){
    const index = prompt('Qual o indice da vaga que deseja excluir?')
    const vaga = vagas[index]
    const confir = confirm('Deseja excluir esta vaga?\n' +
    'Vaga nº ' + index + '\n' +
    'Nome: ' + vaga.nome + '\n' +
    'Descrição: ' + vaga.descricao + '\n' +
    'Data limite: ' + vaga.data)
    
    if(confir){
        vagas.splice (index, 1)
        alert('Vaga excluida!')
    }
}



do{
    opcao = prompt('Bem vindo ao Sistemas de vagas Online\n' +
    'MENU\n' +
    '1. Listar vagas disponíveis \n'+
    '2. Criar uma nova vaga\n'+
    '3. Visualizar uma vaga\n'+
    '4. Se inscrever em uma vaga\n'+
    '5. Excluir uma vaga\n'+
    '6.Sair \n'
    )

    switch (opcao){
    case '1':
        ListaVagasDisponiveis()
    break;
    case '2':
        CriarUmaNovaVaga()
    break;
    case '3':
        exibirVaga()
    break;
    case '4':
        inscreverCandidato()
    break;
    case '5':
        excluirVaga()
    break;
    case '6':
        alert('Saindo')
    break;
    default:
        alert('Insira um codigo válido!')
        break
    }
}
while(opcao !== '6')