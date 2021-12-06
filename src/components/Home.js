import React from "react";

const Home = (props) => {
    console.warn('Home', props.data)
    return (
        <div>
            <h1>Home Component</h1>
            
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://images-eu.ssl-images-amazon.com/images/I/31kpAzgIFsL._AC_SX184_.jpg" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button 
                        onClick={ ()=>{props.addToCartHandler({pice:1000,name:'Resmi Note'})}}>
                        Add To Cart
                    </button>

                    <button 
                        className="remove-cart-btn"
                        onClick={ ()=>{props.removeToCartHandler()}}>
                        Remove To Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home;