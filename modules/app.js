import * as ui_cart from "./ui_cart.js";
import * as products from "./products.js";
import productloader from"./productloader.js";


export let init = function(){
    let cart = document.getElementsByClassName("dropdown")[0];
    cart.addEventListener("click", (e) => {
        ui_cart.cart_toggle_visibility()
        console.log(e.target)
    })

    let catalogue = document.getElementsByClassName("products-slick")[0];
    productloader.load().then(data => {
        data.produits.forEach((p) => {
            catalogue.appendChild(products.display_products(p));
        })
    })
}