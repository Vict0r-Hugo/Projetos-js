alert('detector de palindromos')
const nome  = prompt('Insira uma palavra:')
let nomeinvertido = ''  

for (let i = nome.length - 1 ; i >= 0 ; i--){
   nomeinvertido += nome[i]
}
if (nome === nomeinvertido){
    alert(nome + ' é um palíndromo!')
}
else{
    alert(nome + ' não é um palíndromo!\n' +
    nome + ' é diferente de ' + nomeinvertido)
}

