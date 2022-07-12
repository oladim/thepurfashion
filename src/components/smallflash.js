import styled from "styled-components";
import ladyBag from "../assets/images/elegants.png";
import maleBag from "../assets/images/brown.png";
// import { BlackButton } from "../allimports";
import { BlackButton } from "../utils/helpers";


function SmallFlash() {
    return<Wrapper>
     <div className="red">   
    <Content filetodisplay={ladyBag}/>
    </div>
    <div className="yellow">
    <Content filetodisplay={maleBag}/>
    </div>
   
    </Wrapper>
}

export default SmallFlash;

const Wrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
column-gap: 10px;
.red{
    background-color: #BC3B62;
    border-radius: 15px;
}
.yellow{
    background-color: #F3A204;
    border-radius: 15px;
}
.
`

const Content = ({filetodisplay}) =>{
    return <ContentWrapper>
       
       <div className="price_button">
       <p className="price">Elegant Designs</p>
       <p><BlackButton /></p>
       </div>
       <img src={filetodisplay} alt="display" />
      
    </ContentWrapper>
}

const ContentWrapper = styled.div`
display: grid;
grid-template-columns: 100px 1fr;

height: 243.36px;

border-radius: 15px;
.price_button{
    display: grid;
    margin-left: 15px;
    row-gap: 100px;

    .price{  
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 29.51px;
        
        border-radius: 5px;
    }
}
img{
    width: 100%;
        height: 100%;
        object-fit: contain;
        overflow: hidden;
}
`