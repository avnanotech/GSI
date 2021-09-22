(
 ()=>{
   start();
 })();

 function start() {
  let fin=setTimeout(function(){panel(0)},3000);  
 }

 function panel(brojac) {
  let period=2000;	
  if(brojac==0){
    doctag("div",0).innerHTML="<a>POŠTOVANE KOLEGE...</a><br>";
  }	
  else if(brojac==1){
    doctag("div",0).innerHTML+="<a>POČINJEMO SA ODBROJAVANJEM...</a><br>";
  }
  else if(brojac==2){
    doctag("div",0).innerHTML+="<p>DO VAŠEG LANSIRANJA U SVET NOVIH TEHNOLOGIJA OSTALO JE:<br><br><vreme> </vreme> DANA <br><vreme> </vreme> SATI<br><vreme> </vreme> MINUTA<br><vreme> </vreme> SEKUNDI<br><br>SREĆNO!</p>"; 
    period=500;
  }
  else if(brojac==3){
    brojac--;
    let ngdate = new Date(2022, 0, 1, 0, 0, 0, 0);
    let sada=new Date();
    let mili=ngdate.getTime()-sada.getTime(); 

    let div_min = 1000 * 60;
    let div_sat = div_min * 60;
    let div_dan = div_sat * 24;
    doctag("vreme",0).innerHTML=Math.floor(mili/div_dan);
    doctag("vreme",1).innerHTML=Math.floor(mili/div_sat);
    doctag("vreme",2).innerHTML=Math.floor(mili/div_min);
    doctag("vreme",3).innerHTML=Math.floor(mili/1000); 
    period=1000;
  }
  brojac++
  let fin=setTimeout(function(){panel(brojac)},period);  
 }

 function doctag(tgn,ind){
    return document.getElementsByTagName(tgn)[ind];	
 }

