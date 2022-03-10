import * as ui_cart from "./ui_cart.js";

export let init = function(){
    let cart = document.getElementById("dropdown");
    cart.addEventListener("click", (e) => {
        ui_cart.cart_toggle_visibility()
        console.log(e.target)
    })
}