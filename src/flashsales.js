import styled from "styled-components";
import {SmallFlash, MediumFlash, BigFlash} from "./allimports";
const rectangle = require("./assets/images/rectangle.png");
const flashimage = require("./assets/images/flashimage.png");
const small = require("./assets/images/small.png");
const itemimage = require("./assets/images/itemimage.png");



function FlashSales() {
    return <Wrapper>
        <div className="flash">
            <div className="flashdetails">
            <div><img className="flashback" src={rectangle} alt="Background_Image"/>
            <div className="flashimage">
            <div className="flashimagedetails">
                <div><img src={small} alt="small_background"/></div>
                <div><img className="topimage" src={itemimage} alt="itemimage"/></div>
            </div>
            <div><img src={flashimage} alt="flashimage"/> <div className="order">Order Now</div></div>
            </div>
            </div>
            </div>
            <div className="details">
                <div>Product Details</div>
                <ul>
                    <li>Name: </li>
                    <li>Color: </li>
                    <li>Bag Size: </li>
                    <li>Available Pieces: </li>
                    <li>Material: </li>
                    <li>Size: </li>
                    <li>Inner Material: </li>
                    <li>Weight: </li>
                </ul>
            </div>
        </div>
        <div className="others_flash">
            <div><BigFlash /></div>
            <div className="medium_small">
                <MediumFlash />
                <SmallFlash />
            </div>
        </div>
    </Wrapper>
}

export default FlashSales;

const Wrapper = styled.div`
width: 90%;
margin-right: auto;
margin-left: auto;


.others_flash{
    margin-top: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 10px;

    .medium_small{
        display: grid;
        grid-template-rows: 1fr 1fr;
    }
}

.flash{
    display: grid;
    grid-template-columns: 1fr 1fr;
 
    
    height: 440px;
    
    .flashdetails{
       z-index: -1;
        .flashback{
            object-fit: contain;
        }
        .flashimage{
           
            display: flex;
            position: relative;
            top: -360px;
            left: 90px;
            align-items: center;

           .topimage{
            position: absolute;
            top: -20px;
            left: 42px;
            justify-content: center;
            

            .flashimagedetails{
                display: flex;
                align-items: center;
                justify-content: space-around;
            }
           }
           .order{
            position: absolute;
            width: 120.37px;
            height: 42.18px;
            left: 600px;
            top: 280px;
            background: #000000;
            border-radius: 40px;
            color: #FFFFFF;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
           }
        }
    }
    .details{
        background: #BC3B62;
        height: 440px;
        margin-left: -1px;


        div{
            display: flex;     
            width: 125.95px;
            height: 33.47px;
            margin-left: 25px;
            margin-top: 30px;
            align-items: center;
            justify-content: center;
            background: #FFE1B0;
        }
        ul{
            color: #FFFFFF;
        }

        ul li{
            margin-bottom: 8px;
        }

    }
    
}

@media (max-width: 600px) {
    .flash {
      display: none;
    }
    .others_flash{
        grid-template-columns: 1fr;
        gap: 10px;

        .medium_small{
            gap: 10px;
        }
    }
  }

@media (max-width: 992px) {
    .details {
      visibility: hidden;
    }
  }
`