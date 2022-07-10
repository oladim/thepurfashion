import React, { useEffect } from 'react';
import styled from "styled-components";
import { useParams, useHistory } from 'react-router-dom';
import { useProductsContext } from './context/products_context';
import { single_product_url } from './utils/constants';
// import { formatPrice } from './utils/helpers';
import Loading from "./Loading";
import  Error from "./Error";
// import Categories from "./categories";
import PictureImages from "./pictureimages";
import AddToCart from './components/AddToCart';

function SingleProductPage() {

    const { id } = useParams()
    let myurl = `${single_product_url}${id}`;
    const history = useHistory()
    const {
      single_product_loading: loading,
      single_product_error: error,
      single_product,
      getSingleProduct
      
    } = useProductsContext()
  
    useEffect(() => {
      getSingleProduct(myurl);
    
      // eslint-disable-next-line
    }, [id])
  
    useEffect(() => {
      if (error) {
        setTimeout(() => {
          history.push('/')
        }, 5000)
      }
      // eslint-disable-next-line
    }, [error])
  
    if(loading){
      return<>
    <Loading />
      </> 
     
    }
    if(error){
      return<>
    <Error />
      </> 
      
      
    }
// console.log(product.fields);
    const {name, price, images} = single_product.fields;


    return <Wrapper>
        <div>
         
        </div>
        <div className="product_content">
        <PictureImages className="images" images={images}/>
        <div>
          <p className="name">{name}</p>
          <p className="=code">Product Code: {id}</p>
          <hr />
          <p className="price">${price}</p>
          <hr />
         
          <div className="buy_add">
         
          <AddToCart className="buy" product={single_product} />
          </div>
 
        </div>
        </div>
    </Wrapper>
}


export default SingleProductPage;

const Wrapper = styled.div`


.product_content{
  background: #FFFFFF;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1);
  margin-top: 4rem;
  padding:2rem;
  width: 60%;
  height: 60vh;
  margin-left: auto;
  margin-right: auto;
 display: grid;
 grid-template-columns: 1fr 1fr;

  images{
    justify-self: center;
  }

  .name{
    width: 415.62px;
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 37px;
    text-transform: capitalize;
    color: #242424;
    display: flex;
    align-items: center;
  }
  .code{
      width: 162px;
      height: 17px;
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
      line-height: 17px;
      text-transform: capitalize;
      color: #737373;

  }
  .price{
      width: 109.59px;
      height: 28.51px;;
      font-style: normal;
      font-weight: 700;
      font-size: 30px;
      line-height: 35px;

      color: #BC3B62;
  }
  .buy{
    width: 180px;
    height: 48.8px;
    background: #BC3B62;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    text-transform: uppercase;
      padding: 0.375rem 0.75rem;
      letter-spacing: var(--spacing);
  
      font-weight: 400;
      transition: var(--transition);
      font-size: 0.875rem;
      cursor: pointer;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
      border-radius: var(--radius);
      border-color: transparent;
  
  }
  .add{
      width: 180px;
      height: 48.8px;
      background: #BC3B62;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
    }
    .buy_add{
      display: grid;
      
      p{
       
        width: 64px;
        height: 16px;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 16px;
        color: #494949;
      }
    }
}
`