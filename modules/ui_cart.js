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

const displayCart = function () {
    document.getElementById('qty').innerHTML=genericCalc((x,y)=>x+y.qty)
    let affCart = cart.tabCart.map(ob =>{
        return `<div class="product-img">
				    <img src="./img/produits/1.jpg" alt="">
				</div>
				<div class="product-body">
					<h3 class="product-name"><a href="#">Nom produit</a></h3>
					<h4 class="product-poids"><span class="qty">${ob.qty}</span>Prix</h4>
				</div>
				<button class="delete"><i class="fa fa-close"></i></button>`;
    });
    const reducer = (previousValue, currenValue) => previousValue + currenValue;
    if(affCart.length!==0) {
        document.getElementById('product-widget').innerHTML = affCart.reduce(reducer)
    }else{
        document.getElementById('product-widget').innerHTML = ``;
    }

    document.getElementById('cart-total').innerHTML=
        `<small>${genericCalc((x,y)=>x+y.qty)}</small>
            <h5>Total: prix</h5>`
}

export default {
    addToCart,
    displayCart
}

