function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
      x.className += " responsive";
  } else {
      x.className = "topnav";
  }
}
function vermas(id){
 
  if(id=="mas") {
    document.getElementById("desplegar").style.display="block";   
    document.getElementById("mas").style.display="none"; 
  } else {
    document.getElementById("desplegar").style.display="none";
    document.getElementById("mas").style.display="inline";
  }
  if(id=="mas1") {
    document.getElementById("desplegar1").style.display="block";   
    document.getElementById("mas1").style.display="none"; 
  } else {
    document.getElementById("desplegar1").style.display="none";
    document.getElementById("mas1").style.display="inline";
  }
  if(id=="mas2") {
    document.getElementById("desplegar2").style.display="block";   
    document.getElementById("mas2").style.display="none"; 
  } else {
    document.getElementById("desplegar2").style.display="none";
    document.getElementById("mas2").style.display="inline";
  }
  if(id=="mas3") {
    document.getElementById("desplegar3").style.display="block";   
    document.getElementById("mas3").style.display="none"; 
  } else {
    document.getElementById("desplegar3").style.display="none";
    document.getElementById("mas3").style.display="inline";
  }
   if(id=="mas4") {
    document.getElementById("desplegar4").style.display="block";   
    document.getElementById("mas4").style.display="none"; 
  } else {
    document.getElementById("desplegar4").style.display="none";
    document.getElementById("mas4").style.display="inline";
  }
}