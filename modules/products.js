import cart from "./ui_cart.js";

export const display_products = (produit) => {
    let dom = document.createElement("div");
    dom.classList.add('product');
    dom.innerHTML = `
                    <!-- product -->				
                    <div class="product-img">
                        <img src="img/produits/${produit.id}.jpg" alt="">
                    </div>
                    <div class="product-body">
                        <p class="product-category">Catégorie</p>
                        <h3 class="product-name"><a href="#">${produit.titre}</a></h3>
                        <h4 class="product-poids">${produit.poids} kg</h4>
                    </div>
                    <div class="add-to-cart">
                        <button class="add-to-cart-btn"><i class="fa fa-shopping-cart"></i>ajouter au panier</button>
                    </div>
                    <!-- /product -->`;
    let pCart = dom.getElementsByClassName("add-to-cart-btn")[0];
    pCart.addEventListener('click',() =>{
        cart.addToCart(produit);
        cart.displayCart();
    });
    return dom;
}