// var img = document.querySelectorAll(".myimg")
// img.addEventListener('click', function onclick() {
//    img.style.opacity = '100%';
// });
 
var btn = document.querySelectorAll(".btnplus")
console.log(btn)
for(let i = 0; i<btn.length; i++){
   btn[i].addEventListener('click', function(){
      btn[i].nextElementSibling.innerText++
      calculSomme()        
   })
        
}

var btn2 = document.querySelectorAll(".btnmoin")
console.log(btn2)
for(let i = 0; i<btn2.length; i++){
   btn2[i].addEventListener('click', function(){
      btn[i].nextElementSibling.innerText--
      calculSomme()        
   })
       
}

var heart = document.querySelectorAll(".fa-heart")
console.log(heart)
for(let i = 0; i<heart.length;i++){
   heart[i].addEventListener('click',function(){
       heart[i].classList.toggle('heart')
   })
}
var supprimer = document.querySelectorAll(".supp")
for(let i = 0; i<supprimer.length; i++){
   supprimer[i].addEventListener('click',function(){
       supprimer[i].parentElement.remove()
       calculSomme()        
   })
       
}
function calculSomme(){
   var priceS = document.querySelectorAll('.price')
   var qteS = document.querySelectorAll('.spa')
   var sommeT = document.querySelector('#somme')
   var som = 0
   for(let i = 0; i < priceS.length;i++){
       som = som+ priceS[i].innerHTML * qteS[i].innerHTML
   }
   sommeT.innerHTML = som
}
