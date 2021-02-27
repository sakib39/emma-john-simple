import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    //console.log(props);
    const {img,name,seller,price,stock} = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h4 className="productName">{name}</h4>
                <h5 className="sellerName">by:{seller}</h5>
                <h5 className="productPrice">${price}</h5>
                <p className="stockItems">{stock} items left-order soon</p>
                <button 
                className="mainBtn"
                onClick={()=> props.handleProduct(props.product)}
                >
                    <FontAwesomeIcon icon={faCartPlus} /> add to cart
                    </button>
            </div>
        </div>
    );
};

export default Product;