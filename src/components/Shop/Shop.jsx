import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import "./Shop.css"

const Shop = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <div className='products'>
                {
                    products.map(product => <Products product={product}></Products>
                    )
                }
            </div>
            <Cart></Cart>
        </div>
    );
};

export default Shop;