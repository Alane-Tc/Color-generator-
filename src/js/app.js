window.addEventListener("load",function(){let e=document.querySelector("#btn-Generator");e.addEventListener("click",function(){(()=>{let e=document.querySelector("#muestrario").value;document.querySelector("#span-Result").innerHTML=`El código del color es: ${e}`,document.querySelector("#caja-Color").style.background=e})()})});