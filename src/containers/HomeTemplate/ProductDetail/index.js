
import Rating from 'components/rating';
import data from 'productData.js'
import React from 'react'
// import { Link } from 'react-router-dom';
import './productDetail.css';

export default function ProductDetail(props) {
  const product = data.products.find((x) => x._id === props.match.params.id);
  if (!product) {
    return <div><h1>GAME NOT FOUND</h1></div>
  }
  return (
    <div className="grid-container">
      <header className="row top">
        <div>
          <a className="brand" href="/">Need A Team Name Gaming </a>
        </div>
        
      </header>
      
      <div>
        
        <div className="background">
          <div className="productDetail-container">
            
            <div className="row">
              {/* PRODUCT IMAGE */}
              <div className="col-2">
                <img
                  className="detail-poster"
                  src={product.image}
                  alt={product.name}>
                </img>
                

              </div >


              <div className="description-column">
                <h1 className="game-name">{product.name}</h1>

                <h1 className="detail-rating"><Rating
                  rating={product.rating}
                  numReviews={product.numReviews}
                ></Rating></h1>

                <div className="description-div">
                <h3  className="detail-description">Description: 
                <p className="detail-description">{product.description}</p></h3>
                </div>

                <h1 className="detail-price">Price : ${product.price}</h1>



                <div className="card card-body">
                  
                    
                      <div className="row">
                        <div><h1 className="detail-status">Status: </h1></div>
                        
                        <div>
                          <h1>{product.status === 0 ? (
                            <span className="success">Available</span>
                          ) : (
                            <span className="danger">Unavailable</span>
                          )}</h1>
                          
                        </div>
                      </div>

                      <button className="addToCart">Add to cart</button>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>

      <footer className="row center">All right reserved</footer>
    </div>
  )
}