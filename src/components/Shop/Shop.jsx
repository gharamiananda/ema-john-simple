import React, { useEffect, useState } from 'react';
import { addToDb } from '../../utilities/LocalStorage';
// import { addToDb } from '../../../public/Utilities/LocalStorage';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import "./Shop.css"

const Shop = () => {

    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch("Products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])



    const addToCart = product => {
        // console.log(product);
        let productItems = [...cart, product];
        setCart(productItems);
        // addToDb(id);
        // addToDb(product.id)
        addToDb(product.id)


    }

    return (
        <div className='shop'>
            <div className='products'>
                {
                    products.map(product => <Products
                        product={product}
                        key={product.id}
                        addToCart={addToCart}

                    ></Products>
                    )
                }
            </div>
            <Cart cart={cart}></Cart>
        </div>
    );
};

export default Shop;