import styled from "styled-components";
import AddToCart from "./components/AddToCart";
import PictureImages from "./pictureimages";

function DataPage({product}) {
    const {id, price, name, images} = product;
    // const url = images[0].url;
    console.log("data page", images);
    return <>
        <div>
            {/* <PictureImages className="images" images={images}/> */}
            {/* <div><img src={url} alt="main" loading="lazy"/></div> */}
            <div>

            </div>
          <p className="name">{name}</p>
          <p className="=code">Product Code: {id}</p>
          <hr />
          <p className="price">${price}</p>
          <hr />
         
          <div className="buy_add">
         
          <AddToCart className="buy" products={product} />
          </div>
        </div>
        </>
} 

export default DataPage;

const Wrapper = styled.div`

`