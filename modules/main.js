import {init} from "./app.js";
import * as products from "./products.js";

window.addEventListener("load", () => {
       init()
       products.load().then(data => {
              //display_products(data)
              console.log(data)
       })
});

