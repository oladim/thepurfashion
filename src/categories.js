import styled from "styled-components";
import {Filters} from "./allimports";
import { Link } from "react-router-dom";

function Categories({stats}) {
    return <Wrapper>
        <div className="content">
        {stats ? (<div className="back"><Link to="/"><button>Back to products</button></Link> <p>{stats}</p></div>) :   <Filters />}
          
            {/* <button>All Categories</button>
            <button>New Products</button>
            <button>Bags</button>
            <button>Women</button>
            <button>Men</button>
            <button>Coach X Tom Weseelman</button>
            <button>Coach Insider</button>
            <button>Other Categories</button> */}
        </div>
    </Wrapper>
}

export default Categories;

const Wrapper = styled.div`

width:100%;
height: 50PX;
background: #FFEBF1;

.content {
    width: 90%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

  p{
    font-size: 1rem;
  }
    .back{
      display: flex;
      align-items: center;

      button{
        text-decoration: none;
        border: none;
        height: 50px;
        width: 10rem;
        background: #BC3B62;
        color: white;
        margin-right: 4rem;
      }
    }
}

button{
    border: none;
    height: 19px;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 19px;
    color: #8E5466;
    cursor: pointer;
  }
.content .active{
  color: white;
  height: 100%;
  width: 8rem;
  background: #BC3B62;
}

@media (max-width: 600px) {
    .content {
      flex-wrap: wrap;
    }
  }
`