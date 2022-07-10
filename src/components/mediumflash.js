import styled from "styled-components";
// import {Price, BlackButton} from "../allimports";
import Price from "./price";
import { BlackButton } from "../utils/helpers";
import menbagimage from "../assets/images/menbag.png";


function MediumFlash() {
    return<Wrapper>
        <div className="itemdetails">
            <p className="name">Premium, Original Leather men’s Bag</p>
            <Price />
            <BlackButton className="buttonicon" />
        </div>
       
        <div className="imagecontent"><img src={menbagimage} alt="menbag"/></div>
    </Wrapper>
}



export default MediumFlash;

const Wrapper = styled.div`

height: 239.27px;
background: #F5F5F5;
border-radius: 15px;

display: grid;
grid-template-columns: 1fr 2fr;

.itemdetails{
    margin-left: 30px;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    align-items: center;

    

    p{
        width: 70%;

    }

    
}
.imagecontent{
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 70%;
        height: 70%;
        object-fit: contain;
        overflow: hidden;
    }
}

@media (max-width: 992px) {
    .itemdetails .name{
        width: 100%;
    }

    .order{
        margin-top: -40px;
    }
  }

`

