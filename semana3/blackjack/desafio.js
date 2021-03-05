console.log("Bem vindo ao jogo de Blackjack!")
if(confirm("Quer iniciar uma nova rodada?")) {
  let arrayCartas = [comprarCarta(), comprarCarta(), comprarCarta(), comprarCarta(), comprarCarta()]
   let usuarioCartas = arrayCartas[0].texto + arrayCartas[1].texto
   let usuarioSoma = arrayCartas[0].valor + arrayCartas[1].valor
  if (arrayCartas[0].valor + arrayCartas[1].valor  === 22) {
    let arrayCartas2  = [comprarCarta(), comprarCarta()]
     usuarioCartas =  arrayCartas2[0].texto + arrayCartas2[1].texto
     usuarioSoma = arrayCartas2[0].valor + arrayCartas2[1].valor
  }
  let computadorCartas = arrayCartas[2].texto 
  let computadorSoma = arrayCartas[2].valor 
  if (arrayCartas[2].valor + arrayCartas[3].valor  === 22) {
   let arrayCartas3  = [comprarCarta(), comprarCarta()]
    computadorCartas =  arrayCartas3[2].texto 
    computadorSoma = arrayCartas3[2].valor 
 }
  console.log("Usuário - cartas:", usuarioCartas, " - pontuação: ", usuarioSoma)
  console.log("Computador - cartas:", computadorCartas, " - pontuação: ", computadorSoma)
let outraCarta = confirm("Suas cartas são: " + arrayCartas[0].texto + arrayCartas[1].texto + " A carta revelado do computador é " + arrayCartas[2].texto + 
"\n" + 
"Deseja comprar mais uma carta?")
  if (outraCarta) {
      let cartaComprada = arrayCartas[4]
      usuarioCartas = arrayCartas[0].texto + arrayCartas[1].texto + cartaComprada.texto 
      usuarioSoma = arrayCartas[0].valor + arrayCartas[1].valor + cartaComprada.valor
      console.log("Usuário - cartas:", usuarioCartas, " - pontuação: ", usuarioSoma)
      console.log("Computador - cartas:", computadorCartas, " - pontuação: ", computadorSoma)
      if(usuarioSoma > 21) {
         console.log ("O computador ganhou!")
      }
      else if (usuarioSoma < 21) {
         if(usuarioSoma > computadorSoma) {
            console.log("O usuário ganhou!")
         } else if (usuarioSoma < computadorSoma) {
            console.log ("O computador ganhou!")
         } else if (usuarioSoma === computadorSoma) {
            console.log("Empate!")
            }
      }  
   } if (!outraCarta) {
         if(usuarioSoma > computadorSoma) {
            console.log("O usuário ganhou!")
         } else if (usuarioSoma < computadorSoma) {
            console.log ("O computador ganhou!")
         } else if (usuarioSoma === computadorSoma) {
            console.log("Empate!")
         }
      }
  } else {
      console.log("O jogo acabou!")
   }