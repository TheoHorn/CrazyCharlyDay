import * as products from "./products.js";

let btn_gallery = document.getElementBy("load_gallery");
btn_gallery.addEventListener("click", () => products.load().then(data =>{
    //display_products(data)
    console.log(data)
}))