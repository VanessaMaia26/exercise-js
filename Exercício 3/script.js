// string - Indexadas (0123456789...)
let string= "Um texto qualquer";

console.log(string[0]); // [0] ou .charAt(0)
console.log(`${string} em um lindo dia.`) // Concatenação com template string
console.log(string.indexOf('texto')); // Pesquisar por um índice - ou .indexOf('texto, 3') - depois de um index específico
console.log(string.lastIndexOf('o')); // De trás pra frente - ou .indexOf('o, 3') - depois de um index específico
console.log(string.replace('Um', 'Outra')); // Substituir a palvra ou frase ou substituir uma letra específica .replace(/u/, '#') para uma só, ou repetidamente .replace(/u/g, '#') 
console.log(string.length); // Pegar o tamanho da string
console.log(string.slice(3, 8)); // Pegar palavra exata - sempre pega um a mais

// Exercise Strings
const nome = prompt('Digite seu nome completo:');
document.body.innerHTML += `Seu nome é: ${nome}<br />`;
document.body.innerHTML += `Seu nome tem ${nome.length} letras <br />`;
document.body.innerHTML += `A segunda letra do seu nome é: ${nome[1]} <br />`; 
document.body.innerHTML += `Qual o primeiro índice da letra a no seu nome? ${nome.indexOf('a')} <br />`;
document.body.innerHTML += `Qual o último índice da letra a no seu nome? ${nome.lastIndexOf('a')} <br />`;
document.body.innerHTML += `As últimas 4 letras do seu nome são: ${nome.slice(-4, nome.length)} <br />`;
document.body.innerHTML += `As palavras do seu nome são: ${nome.split(' ')} <br />`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toLocaleUpperCase()} <br />`;
document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLowerCase()} <br />`;
