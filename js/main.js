"use strict";
// slider

// btn scroll
let btnScroll = document.getElementById("btnScroll");
window.onscroll =function(){
  if(window.pageYOffset >= 200){
    btnScroll.style.display = "block";
  } else {
    btnScroll.style.display = "none";
  }
}
btnScroll.onclick=function(){
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
} 
// show pages
let show = document.querySelector(".pages")
let page = document.querySelector(".main-nav-downn")
function showPages(){
  page.style.display = "block";
};
// preloading
let loading = document.querySelector(".loading");
window.onload = function(){
  loading.style.opacity = "0";
  setTimeout(function(){
    loading.style.display = "none";
  
  },3000);
}


// scroll navbar
let nav = document.querySelector(".navbar");
document.addEventListener("scroll", function(){
  let scrollTop = window.pageYOffset;
  if(scrollTop > 132){
    nav.style.position = "fixed";
    nav.style.top = "0";
  } else {
    nav.style.position = "relative";
  }
});

// let itemCart =document.querySelectorAll(".item");
// let disCart = document.getElementById("disCart")
// let disCartItem = document.querySelector(".cart-pro-info")
// let allArray=[]
// for (let i = 0; i < itemCart.length; i++) {

//   itemCart[i].addEventListener("click", function(e){
//     if(e.target.innerHTML == "Add Cart"){
//       let item ={
//         name: itemCart[i].children[2].innerHTML,
//         price:itemCart[i].children[1].innerHTML,
//         imgSrc:itemCart[i].children[0].getAttribute("src"),
//       }
//       allArray.push(item);
//       localStorage.setItem("Cart",JSON.stringify(allArray));
   
   
   
      
      
//       disCart.textContent = allArray.length;
//     }}
  









// let btnAdd = document.querySelectorAll(".btnAdd");
// let cart=[]
// btnAdd.forEach((btn,ind) => {
//   btn.addEventListener("click",function(e){
//   cart.push(itemCart[ind])
// cart = allArray
//   // console.log(allArray);
//   disCart.textContent = allArray.length


  
 

//   }

// )
// });
// function displayCart(){
//   allArray.forEach((item,ind) => {
//     let div = document.createElement("div");
//     disCart.innerHTML = `
//     <img src="${item.imgSrc}" alt="">
//     <h3>${item.name}</h3>
//     <p>${item.price}</p>
//     `;
//     console.log(displayCart);
    
//   })
// }




// btnAdd.forEach((btn, i) => {

// })






