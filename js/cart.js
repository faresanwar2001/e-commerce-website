// // let itemCart = document.querySelectorAll(".item");
// let disCart = document.getElementById("disCart");
// let disCartItem = document.querySelector(".cart-pro-info");

// let allArray = [];


// if (localStorage.getItem("Cart")) {
//     allArray = JSON.parse(localStorage.getItem("Cart"));
//     disCart.textContent = allArray.length; 
//     displayProducts(); 
// }


// for (let i = 0; i < itemCart.length; i++) {
//     itemCart[i].addEventListener("click", function(e) {
//         if (e.target.innerHTML === "Add Cart") {
            
//             let item = {
//                 name: itemCart[i].children[2].innerHTML,
//                 price: parseFloat(itemCart[i].children[1].innerHTML),
//                 imgSrc: itemCart[i].children[0].getAttribute("src")
//             };

//             allArray.push(item);

          
//             localStorage.setItem("Cart", JSON.stringify(allArray));

          
//             disCart.textContent = allArray.length;

          
//             displayProducts();
//         }
//     });
// }


// function displayProducts() {
//     let allCart = ``;
    
    
//     for (let i = 0; i < allArray.length; i++) {
//         let item = allArray[i];
      
        
//         allCart += `
//            <div class="cart-img">
//                 <img src="${item[i].imgSrc}" alt="">
//            </div>
//            <div class="cart-name">
//                 <h2>Name</h2>
//                 <p>${item[i].name}</p>
//            </div>
//            <div class="cart-color">
//                 <h2>Color</h2>
//                 <p><input type="color" value="#0099cc"></p>
//            </div>
//            <div class="cart-qua">
//                 <h2>Quantity</h2>
//                 <p>1</p>
//            </div>
//            <div class="cart-price">
//                 <h2>Price</h2>
//                 <p>${item[i].price}</p>
//            </div>
//            <div class="cart-total">
//                 <h2>Total</h2>
//                 <p>${item[i].price}</p>
//            </div>
//         `;
//     }

    
//     disCartItem.innerHTML = allCart;
// }

document.addEventListener("DOMContentLoaded", function() {
    let cartCount = document.getElementById("disCart");
    let itemCart = document.querySelectorAll(".item");
  
    let cart = JSON.parse(localStorage.getItem("Cart")) || [];
  
    if (cartCount) {
      cartCount.textContent = cart.length;
    }
    display();
  
    for (let i = 0; i < itemCart.length; i++) {
      itemCart[i].addEventListener("click", function (e) {
        if (e.target.innerHTML === "Add Cart") {
          let item = {
            name: itemCart[i].children[2]?.innerHTML || "Unknown",
            price: parseFloat(itemCart[i].children[1]?.innerHTML || "0.00"),
            imgSrc: itemCart[i].children[0]?.getAttribute("src") || "",
          };
  
          cart.push(item);
          localStorage.setItem("Cart", JSON.stringify(cart));
          
          if (cartCount) {
            cartCount.textContent = cart.length;
          }
          display();
        }
      });
    }
  
    function display() {
      let cartContainer = document.getElementById('cart-pro-info');
      let totalOrder = document.querySelector(".total-info-data");
      console.log(totalOrder);
      
      if (!cartContainer || !totalOrder) {
        console.error("Required elements not found.");
        return;
      }
  
  
      
      let storedCart = JSON.parse(localStorage.getItem("Cart")) || [];
  
      if (!Array.isArray(storedCart)) {
        console.error("Stored cart is not an array.");
        return;
      }
  
      let totalAmount = 0; 
        storedCart.forEach((item, index) => {
        if (!item || !item.imgSrc || !item.name || !item.price) {
          console.error(`Invalid item at index ${index}:` , item);
          return;
        }
  
        const cartItem = `
          <div class="row">
            <div class="col-lg-3">
              <img src="${item.imgSrc}" alt="${item.name}">
            </div>
            <div class="col-lg-9">
              <div class="row">
                <div class="col">
                  <p class="name">Name</p>
                  <p class="item-name">${item.name}</p>
                </div>
                <div class="col">
                  <p class="color">Color</p>
                  <div class="item-color"></div>
                </div>
                <div class="col">
                  <p class="qua">Quantity</p>
                  <p class="qua-item">1</p>
                </div>
                <div class="col">
                  <p class="price">Price</p>
                  <p class="price-item"><span>$</span>${item.price}</p>
                </div>
                <div class="col">
                  <p class="total">Total</p>
                  <p class="item-total"><span>$</span>${item.price}</p>
                </div>
              </div>
            </div>
          </div>
          <hr>
        `;
        cartContainer.innerHTML += cartItem;
  
        totalAmount += item.price;
      });
  
    
    }
  });
