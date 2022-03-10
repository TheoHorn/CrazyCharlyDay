import * as ui_cart from "./ui_cart.js";
import * as ui_products from "./ui_products.js"

export let init = function(){
    let cart = document.getElementsByClassName("dropdown")[0];
    cart.addEventListener("click", (e) => {
        ui_cart.cart_toggle_visibility()
        console.log(e.target)
    })

    ui_products.builds_products_init();
    let txtRech = document.getElementById("search");
    let bRech = document.getElementsByClassName("search-btn")[0];
    bRech.addEventListener("click",(event) => {
        if(txtRech.value !== ""){
            ui_products.remove_products()
            ui_products.builds_products(txtRech.value)
        }else{
            ui_products.remove_products()
            ui_products.builds_products_init();
        }
    });

}