import styled from "styled-components";
// import { Category } from "./allimports";
import Category from "./components/category_template";


function TopCategories() {

    const catItems = [
        {id: 1, name: "New Products", url:require("../src/assets/images/mainpurse.png")}, 
        {id: 2, name: "Bags", url:require("../src/assets/images/bluepurse.png")}, 
        {id: 3, name: "Women Products", url:require("../src/assets/images/pursemore.png")}, 
        {id: 4, name: "Men Products", url:require("../src/assets/images/bagpack.png")}, 
        {id: 5, name: "Coach Insider", url:require("../src/assets/images/greenpurse.png")}, 
        {id: 6, name: "Wellsman", url:require("../src/assets/images/pursemore.png")}
    ]
    return <Wrapper>
        <p className="topcate">TOP CATEGORIES | SHOP BY CATEGORY</p>
        <div className="content">
            
            {catItems.map((item)=>{
                return <Category key={item.id} {...item}/>
            })}
        </div>
    </Wrapper>
}

export default TopCategories;

const Wrapper = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
P{
    height: 25px;
    font-style: normal;
    font-weight: 800;
    font-size: 26px;
    line-height: 25px;
    text-transform: uppercase;
    color: #373636;
    margin-top: 60px;
    margin-bottom: 60px;
}
.content{
    width: 90%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(249.34px, 1fr));
   column-gap: 5px;
   row-gap: 10px;
   justify-content: center;
   align-items: center;
   margin-bottom: 60px;
}

@media (max-width: 600px) {
    .topcate {
     margin-left: 10px;
     font-size: 20px;
    }
  }

`