let nomeHeroi = prompt("Digite o nickname: ");
console.log = alert(`Bem vindo ${nomeHeroi}`);
let expHeroi = prompt("Digite quanto de exp você tem: ");

if (expHeroi === 1000) {
  console.log = alert(`Você é um herói de nível ferro`);
} else if (expHeroi > 1001 && expHeroi <= 2000) {
  console.log = alert(`Você é um herói de nível bronze`);
} else if (expHeroi > 2001 && expHeroi <= 5000) {
  console.log = alert(`Você é um herói de nível Prata`);
} else if (expHeroi > 5001 && expHeroi <= 7000) {
  console.log = alert(`Você é um herói de nível Ouro`);
} else if (expHeroi > 7001 && expHeroi <= 8000) {
  console.log = alert(`Você é um herói de nível Platina`);
} else if (expHeroi > 8001 && expHeroi <= 9000) {
  console.log = alert(`Você é um herói de nível Ascendente`);
} else if (expHeroi > 9001 && expHeroi <= 10000) {
  console.log = alert(`Você é um herói de nível Imortal`);
} else if (expHeroi >= 10001) {
  console.log = alert(`Você é um herói de nível Radiante`);
}

console.log(alert(`O Herói de nome ${nomeHeroi} está no nível de ${expHeroi}`));
