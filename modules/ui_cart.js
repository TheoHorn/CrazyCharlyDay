let tabCart = [];

let obj = function (p) {
    this.product = p;
    this.qty = 1;
}

const addToCart = function (p) {
    let prod = tabCart.find(e => e.product === p);
    if (prod === undefined){
        tabCart.push(new obj(p))
    }else {
        prod.qty ++;
    }
}

const genericCalc = function (f) {
    return tabCart.reduce(f,0)
}

const emptyCart = function () {
    tabCart.length = 0;
}

export const cart_toggle_visibility = () => {
    let cartDrop = document.getElementsByClassName("cart-dropdown")[0];
    if (cartDrop === undefined) cartDrop = document.getElementsByClassName("dropdown-open")[0];
    if(cartDrop.className === "cart-dropdown"){
        cartDrop.className = "dropdown-open"
    }else{
        cartDrop.className = "cart-dropdown"
    }
    console.log(cartDrop.className)

}

export default {
    tabCart : tabCart,
    addToCart,
    genericCalc,
    emptyCart
}

