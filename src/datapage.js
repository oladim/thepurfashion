import styled from "styled-components";
import AddToCart from "./components/AddToCart";
import PictureImages from "./pictureimages";

function DataPage({product}) {
    const {id, price, name, images} = product;
    // const url = images[0].url;
    console.log("data page", images);
    return <Wrapper>
        <div className="maincontent">
      <div className="contentdetails">
            {images && <div><PictureImages className="images" images={images}/></div>}
            {/* <div><img src={url} alt="main" loading="lazy"/></div> */}
            <div className="otherdetails">

            
          <p className="name">{name}</p>
          <p className="=code">Product Code: {id}</p>
          <hr />
          <p className="price">${price}</p>
          <hr />
         
          <div className="buy_add">
         
          <AddToCart className="buy" products={product} />
          </div>
          </div>
          </div>
          </div>
        </Wrapper>
} 

export default DataPage;

const Wrapper = styled.div`
.maincontent{
    background: #FFFFFF;
        box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1);
        margin-top: 4rem;
        padding:2rem;
        width: 60%;
        height: 70vh;
        margin-left: auto;
        margin-right: auto;
        align-items: center;
        justify-content: center;
}
      
 .contentdetails{
   
        
       display: grid;
       grid-template-columns: 1fr 1fr;
       align-items: center;
       justify-content: center;
        margin-left: 55px;
       .otherdetails{
        margin-top: -30px;
       }
 }


 @media (max-width: 800px) {
    .test{
        width: 100vh;
    }
    .contentdetails {
        display: grid;
        grid-template-columns: 1fr;
       
        width: 90%;
        align-items: center;
        justify-content: center;
        
    }
    .maincontent{
        width: 80%;
        height: 100vh;
    }
  }

  @media (max-width: 600px) {
    .maincontent {
      margin-bottom: 1rem;
      height: 100%;
  }

  @media (max-width: 360px) {
    .maincontent {
      margin-bottom: 1rem;
      height: 100%;
  }
`