import styled from "styled-components";
// import { DealsHeading, SingleProduct } from "./allimports";
import DealsHeading from "./components/dealsheading";
import SingleProduct from "./singleproduct";
import { useFilterContext } from './context/filter_context';
// import { useProductsContext } from "./context/products_context";

function NewProducts() {


    const { filtered_products: products } = useFilterContext()
  
  if (products.length < 1) {
    return <Wrapper>

      <div className="personalcolor">
        <DealsHeading deal={"Products"}/>
        </div>
      <h5 className="searchresult" style={{ textTransform: 'none' }}>
        Sorry, no products matched your search...
      </h5>
    </Wrapper>
  }

    // const newItems = [
    //     {id: 1, name: "Premium Original Leather Men's Bag", url:require("../src/assets/images/mainpurse.png"), discount: 20}, 
    //     {id: 2, name: "Ladies Green Bag", url:require("../src/assets/images/bluepurse.png"), discount: 40}, 
    //     {id: 3, name: "Wellsman Spirit Lovelch", url:require("../src/assets/images/pursemore.png"), discount: 10}, 
    //     {id: 4, name: "Right Wing Bag", url:require("../src/assets/images/bagpack.png"), discount: 40}, 
    //     {id: 5, name: "Fashionable Storrage Bag", url:require("../src/assets/images/greenpurse.png"), discount: 50}, 
    //     {id: 6, name: "Men's Leather 6 Pockets Bag Pack", url:require("../src/assets/images/pursemore.png"), discount: 70}
    // ]

    return <Wrapper>
        <div className="personalcolor">
        <DealsHeading deal={"Products"}/>
        </div>
        <div className="content">
        {
            products.map((item)=>{
                return  <SingleProduct key={item.id} {...item}/>
            })
        }
        </div>
        
       
    </Wrapper>
}

export default NewProducts;

const Wrapper = styled.div`
width: 90%;
margin-left: auto;
margin-right: auto;
margin-top: 15px;

.searchresult{
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
}

.content{
    display: grid;
    gap: 20px;
    background: #F5F5F5;
    border-radius: 0px 0px 33px 33px;
    padding-top: 50px;
    padding-bottom: 50px;
    padding-left: 30px;
    padding-right: 30px;
}

.personalcolor{
    background: #BC3B62;
    border-radius: 33px 33px 0px 0px;
}



@media (max-width: 992px) {
    .content {
      grid-template-columns: repeat(2, 1fr);
    }
  }

@media (min-width: 1170px) {
    .content {
      grid-template-columns: repeat(4, 1fr);
      
    }
  }

 
  @media (max-width: 600px) {
    .content {
        grid-template-columns: repeat(1, 1fr);

        .contents{
           margin-left: auto;
           margin-right: auto;
           
          }
      }

     
  }


`