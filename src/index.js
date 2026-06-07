let nome = "Arthur"
let Xp = 1000
let nivel = ""

if (Xp <= 1000) {
    nivel = "Ferro"
}   
else if (1001 <= 2000) {
    nivel = "Bronze"
} 
else if (2001 <= 3000) {
    nivel = "Prata"
}  
else if (3001 <= 4000) {
    nivel = "Ouro"
}
else if (4001 <= 5000) {
    nivel = "Platina"
}
else if (5001 <=6000) {
    nivel = "Ascendente"
}
else if (6001 <= 7000) {
    nivel = "Diamante"
}
else if (7001 <= 8000) {
    nivel = "Imortal"
}
else if (8001 <= 9000) {
    nivel = "Radiante"
} 
console.log(nome + " está no nível de " + nivel)