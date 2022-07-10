import styled from "styled-components";
import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useProductsContext } from './context/products_context'
import { single_product_url as url } from './utils/constants';
// import { formatPrice } from './utils/helpers';
import Loading from "./Loading";
import  Error from "./Error";
// import Header from "./header";
// import Categories from "./categories";
import PictureImages from "./pictureimages";




function SingleProductPage() {

    const { id } = useParams()
    console.log("id", id);
    const history = useHistory()
    const {
      single_product_loading: loading,
      single_product_error: error,
      single_product: product,
      getSingleProduct,
    } = useProductsContext()

    const {fields: { name, images, price}} = product;
  
    useEffect(() => {
      console.log("useeffect", url)
      getSingleProduct(`${url}${id}`)
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
  
    if (loading && !product) {
      return <Loading />
    }
    if (error) {
      return <Error />
    }
// console.log(product.fields);
    // const {category, name, price, images, size, material, dimension, innerMaterial, weight, stock, instock} = product.fields


    return <Wrapper>
        <div>
           {/* <Header />  */}
          
        </div>
        <div className="product_content">
        <PictureImages className="images" images={images}/>
        <div>
          <p className="name">{name}</p>
          <p className="=code">Product Code: {id}</p>
          <hr />
          <p className="price">${price}</p>
          <hr />
          <p>Quantity</p>
          <div className="buy_add">
            <div className="buy">Buy Now</div>
            <div className="add">Add to cart</div>
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

  width: 70%;
  height: 60vh;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
 

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
    background: #2F8F44;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
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
      display: flex;
      gap: 1rem;
    }
}
`