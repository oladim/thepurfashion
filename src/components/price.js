import styled from "styled-components";

function Price({price}) {
    return <Wrapper>
        {price ? (<div><p className="strike">${(0.70 * price)+price}</p>
    <p className="price">${price}</p></div>): (<div><p className="strike">$100</p>
    <p className="price">$70</p></div>)}
    
</Wrapper>
}

export default Price;

const Wrapper = styled.div`
.strike{
    text-decoration: line-through;
    margin-bottom: -10px;
font-style: normal;
font-weight: 800;
font-size: 14px;
line-height: 14px;
color: #343434;

}
.price{
width: 43.12px;
font-style: normal;
font-weight: 800;
font-size: 20px;
line-height: 14px;
color: #B75555;
}
`