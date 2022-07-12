import styled from "styled-components";
import image from "../assets/images/exclusive.png";
// import { BlackButton, Price } from "../allimports";
import { BlackButton } from "../utils/helpers";
import Price from "./price";


function BigFlash() {
    return<Wrapper className="wrap">
        <p className="name">Premium Original Leather Designs</p>
        <div className="imagecontent"><img src={image} alt="couchbag"/></div>
        <div className="price_button">
            <Price />
            <BlackButton />
        </div>
    </Wrapper>
}


export default BigFlash;

const Wrapper = styled.div`

height: 497.57px;
background: #F5F5F5;
border-radius: 15px;

display: grid;
grid-template-rows: 100px 1fr 100px;
.name{
    width: 200px;
    margin-left: 30px;
    margin-top: 20px;
}
.imagecontent{
    display: flex;
    margin-left: auto;
    margin-right: auto;
    img{
        margin-top: -5rem;
        width: 100%;
        height: 100%;
        object-fit: contain;
        overflow: hidden;
    }
}
.price_button{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-top: -15rem;

    .strike{
        text-decoration: line-through;
        margin-bottom: -15px;
    }
}


`
