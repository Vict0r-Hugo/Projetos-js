const listadePacientes = ['Victor', 'Isabela', 'Sara', 'Andreia']
let opcao = ''
let pacientesConsultados = ''

do{
    let ordem = ''
    for (let i = 0; i  < listadePacientes.length ; i++){
        ordem += ((i + 1) + '° - ' + listadePacientes[i] +'\n' )
    }

   opcao = parseFloat(prompt( 'Pacientes:\n' + ordem + '\n' + 
   'O que deseja fazer?\n' +
   '1. Adicionar paciente\n'  +
   '2. consultar paciente\n' +
   '3. Sair'
   ))

    switch (opcao) {
        case 1:
            const novoPaci = (prompt('Insira o nome do paciente:'))
            listadePacientes.push(novoPaci)
            break;
        case 2:
            pacientesConsultados = listadePacientes.shift ()
            if(pacientesConsultados){
            alert(pacientesConsultados + ' foi consutado e removido da lista de pacientes!')
            }
            else{
                alert('Não existe paciente a ser consultado!')
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

