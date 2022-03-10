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

const DeleteCart = function (f){
    let tab = tabCart.indexOf(f);
    if (tab !== -1) {
        tabCart.splice(tab, 1);
    }
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
    document.getElementsByClassName("qty")[0].innerHTML=genericCalc((x,y)=>x+y.qty)
    let affCart = tabCart.map(ob =>{
        let d = `<div id="product-widget">
                    <div class="product-img">
                        <img class="cart-img" src="./img/produits/${ob.product.id}.jpg" alt="">
                    </div>
                    <div class="product-body">
                        <h3 class="product-name"><a href="#">${ob.product.titre}</a></h3>
                        <h4 class="product-poids"><span class="qty">${ob.qty}</span><br>${ob.product.poids}</h4>
                    </div>
                    <button class="delete"><i class="fa fa-close"></i></button>
				</div>`;
        let BDelet = document.getElementsByClassName("delete")[0];
        BDelet.addEventListener('click',() =>{
            DeleteCart(ob);
            displayCart();
        });
        return d;
    });
    const reducer = (previousValue, currenValue) => previousValue + currenValue;
    if(affCart.length!==0) {
        document.getElementsByClassName("cart-list")[0].innerHTML = affCart.reduce(reducer);
    }else{
        document.getElementsByClassName("cart-list")[0].innerHTML = ``;
    }

    document.getElementsByClassName("cart-total")[0].innerHTML=
        `<h5>Total : ${genericCalc((x,y) => x+y.qty*y.product.poids)}</h5>`;
}

export default {
    addToCart,
    displayCart
}

