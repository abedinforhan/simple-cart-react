import React from 'react';

const Product = (props) => {

     const {name , img ,category,price,stock}=props.product  || {}

    return (
     <div className="col-md-6">
            <div class="card mb-3" style={ {"max-width": "540px"}}>
        <div class="row g-0">
          <div class="col-md-5">
            <img src={img} class="img-fluid rounded-start" alt="..."/>
          </div>
          <div class="col-md-7">
            <div class="card-body">
              <h5 class="card-title"><small>{name}</small></h5>
              <p class="card-text">
              <small>$   {price}</small>
              </p>
              <p class="card-text">
              <small> {stock}  left</small>
              </p>
              <button 
              onClick={ ()=> props.handleAddProduct(props.product)}
              className="btn btn-primary"> 
              Add Product</button>
                
            </div>
          </div>
        </div>
      </div>
     </div>
    );
};

export default Product;