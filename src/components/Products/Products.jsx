import React from 'react';
import "./product.css"

const Products = ({ product, addToCart }) => {
    return (
        <div className='product'>
            <img src={product.img} alt="" />
            <h2>{product.name}</h2>
            <h3>Price: ${product.price}</h3>
            <p></p>

            <button onClick={() => addToCart(product)}>Add To cart</button>

        </div>
    );
};

export default Products;