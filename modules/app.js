import * as ui_cart from "./ui_cart.js";
import * as products from "./products.js";


export let init = function(){
    let cart = document.getElementsByClassName("dropdown")[0];
    cart.addEventListener("click", (e) => {
        ui_cart.cart_toggle_visibility()
        console.log(e.target)
    })

    products.load().then(data => {
        data.produits.forEach((p) => {
            products.display_products(p);
        })
    })
}