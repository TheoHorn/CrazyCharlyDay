import * as products from "./products.js";
import productloader from "./productloader.js";

export const builds_products_init = () => {
    let catalogue = document.getElementsByClassName("products-slick")[0];
    productloader.load().then(data => {
        data.produits.forEach((p) => {
            catalogue.appendChild(products.display_products(p));
        })
    })
}

export const remove_products = () => {
    let catalogue = document.getElementsByClassName("products-slick")[0];
    while (catalogue.firstChild) {
        catalogue.removeChild(catalogue.lastChild);
    }
}

export const builds_products = (recherche) => {
    let catalogue = document.getElementsByClassName("products-slick")[0];
    productloader.load().then(data => {
        data.produits.forEach((p) => {
            if (recherche !== undefined && products.titre.includes(recherche)){
                catalogue.appendChild(products.display_products(p));
            }
        })
    })
}