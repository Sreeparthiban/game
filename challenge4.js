
//challenge 4 
var score,roundscore,activeplayer,dice1,dice2,gameplaying;

starting();

var count=0;
document.querySelector('.btn.btn--roll').addEventListener('click', function (){     
   dice1=Math.floor(Math.random()*6)+1;
   dice2=Math.floor(Math.random()*6)+1;

   document.getElementById('dice1').style.display='block';
   document.getElementById('dice2').style.display='block';

 var dicedom1=document.getElementById('dice1');  
 var dicedom2=document.getElementById('dice2');
 //dicedom.style.display='block';
 dicedom1.src='dice-'+ dice1 +'.png';
 dicedom2.src='dice-'+ dice2 +'.png';

  if (dice1==6 && dice2==6) {
      count++; 
      if (count==1){
          count=0;
         roundscore=0;
    nextplayer();
  }
  }else
    roundscore =roundscore+dice1+dice2;
    document.querySelector('#current--'+ activeplayer).textContent=roundscore;
 })

document.querySelector('.btn.btn--hold').addEventListener('click',function () {

  if (gameplaying) {
    score[activeplayer] +=roundscore
    document.querySelector('#score--'+activeplayer).textContent=score[activeplayer];

   var input =document.querySelector('.final-value').value;
    var winningscore;

    if(input){
      winningscore=input;
    }else{
     winningscore=100;
    }
   
    if(score[activeplayer]>winningscore){
      document.querySelector('#name--'+ activeplayer).textContent="winner";

      document.getElementById('dice1').style.display='none';
      document.getElementById('dice2').style.display='none';

      document.querySelector('.player.player--'+ activeplayer ).classList.add('winner')
      document.querySelector('.player.player--'+ activeplayer ).classList.remove('player--active')

      gameplaying=false;
    }else{
     nextplayer()
   }
  }
  
 })
document.querySelector('.btn.btn--new').addEventListener('click', starting);
 
 function nextplayer(){

  activeplayer===0 ? activeplayer=1:activeplayer=0;
  roundscore=0;

  document.getElementById('current--0').textContent='0';
  document.getElementById('current--1').textContent='0';

  document.querySelector('.player.player--0').classList.toggle('player--active');
  document.querySelector('.player.player--1').classList.toggle('player--active');
}


function starting(){

  score=[0,0];
  roundscore=0;
  activeplayer=0;
  gameplaying=true;

 document.getElementById('dice1').style.display='none';
 document.getElementById('dice2').style.display='none'; 

 document.getElementById('score--0').textContent='0';
 document.getElementById('score--1').textContent='0'; 

 document.getElementById('current--0').textContent='0';
 document.getElementById('current--1').textContent='0';

 document.querySelector('.final-value').value='';
}


// git