const d = document;

export const digitalRaffle = () => {
 let $arrayRaflle = document.querySelector(".digital__raffle").getElementsByTagName('li');
 let raffleTotal = [];
 [].forEach.call($arrayRaflle, element => {
   let $raffleList = element.textContent;
   //raffleList.push(element);
   let totalTaffle = raffleTotal.push($raffleList); /*Esta linea de codigo se encarga de enviar cada elemento y agruparlo en un solo arreglo*/
   //raffleLiall = raffleList.slice();
   //console.log(raffleLiall);
   //console.log(raffleList);
 });
 

 let $btnGetwinner = d.getElementById("winner-btn");
 d.addEventListener("click", e=> {
   if (e.target === $btnGetwinner) {
     /*$btnGetwinner, ${$btnGetwinner} **/
    let raffleTotalrandom = raffleTotal [Math.floor(Math.random() * raffleTotal.length)];
     alert(`El ganador del sorteo es ${raffleTotalrandom}`);
   }
 })
 //console.log(raffleTotalrandom);
 //console.log(raffleTotal);
}