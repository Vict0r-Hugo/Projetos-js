function addPlayer(){

const playerposition = document.getElementById('position').value

const playerName = document.getElementById('name').value

const playerNumber = document.getElementById('number').value

const confirmacao = confirm('Confirma a escalação?\n' +
'Nome: ' + playerName + '\n' +
'posição: ' + playerposition + '\n' +
'Número: ' + playerNumber)

if (confirmacao) {
    const player = document.getElementById('playerList')
    const playerItem = document.createElement('li')
    playerItem.id = 'player-' + playerNumber
    playerItem.innerText = 'Nome: '+ playerName + ' / ' +'Numero: (' + playerNumber +')' + ' / ' + 'Posição: '+ playerposition
    player.appendChild(playerItem)

    document.getElementById('position').value = '' 
    document.getElementById('name').value = ''
    document.getElementById('number').value = ''
}

}
function removePlayer(){
    const rmv = document.getElementById('numbertoRemove').value
    const playerrmv = document.getElementById('player-'+ rmv)

    const confirme = confirm ('Deseja remover ' + playerrmv.innerText + '?')
    if(confirme){
        document.getElementById('playerList').removeChild(playerrmv)

        document.getElementById('numbertoRemove').value = ''

    }
    
}