import styled from "styled-components";
import Price from "./components/price";
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'


function SingleProduct({url, id, name, price}) {
    return <Wrapper>
        <div className="contents">
            <div className="discount">-70%</div>
            <div className="image"><img src={url} alt="itemimage"/></div>
            <Link to={`/products/${id}`} className='link'><FaSearch /></Link>
            <div className="name">{name}</div>
            <div className="price_cart">
                <Price price={price}/>
                <div  className="cart"><img src={require("./assets/images/carticon.png")} alt="carticon"/></div>
            </div>
        </div>
    </Wrapper>
    
}

export default SingleProduct;

const Wrapper = styled.div`

.contents{
    background: #FFFFFF;
    width: 280px;
    border-radius: 28px;
    padding: 15px;
    display: grid;
    grid-template-rows: 30px 1fr 50px 60px;
    box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1);
  
}

.contents .link {
    margin-left: 2rem;
    transform: translate(-50%, -50%);
    background: red;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-self: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: white;
    }
  }

.contents:hover {
    opacity: 0.6;
}

.contents:hover .link {
    opacity: 1;
  }
.discount{
display: flex;
justify-content: center;
align-items: center;
width: 47.94px;
height: 23.74px;
background: #F7E5EA;
justify-self: right;
}

.image{
    display: flex;
    justify-content: center;
    align-items: center;
    width:90%;
    height: 90%;
    img{
        width: 100%;
        height: 226px;
        object-fit: cover;
        overflow: hidden;
        transition: all 0.5s ease-out 1s;
    }
} 

.name{
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 16px;
text-transform: capitalize;
}

.price_cart{
    display: flex;
    justify-content: space-between;
    align-items: center;

    .cart{
    
        object-fit: contain;
        overflow: hidden;
    }
}

}
`