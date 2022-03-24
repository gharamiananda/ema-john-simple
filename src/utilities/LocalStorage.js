const addToDb = id => {

    let shoppingCart;
    // get product from storage

    const storedCart = localStorage.getItem("shopping-cart");
    if (storedCart) {
        // console.log(storedCart);
        shoppingCart = JSON.parse(storedCart)
    } else {
        shoppingCart = {};
    }



    // add product to storage 


    const quantity = shoppingCart[id];

    if (quantity) {
        const newQuantity = parseInt(quantity) + 1;
        shoppingCart[id] = newQuantity;
        // localStorage.setItem(id, newQuantity)
    } else {
        // localStorage.setItem(id, 1);
        shoppingCart[id] = 1;
    }

    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));

    // const cartShowProduct = localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
    console.log(shoppingCart);


}
export { addToDb }