
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

