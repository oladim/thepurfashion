import styled from "styled-components";

function Price({price}) {
    return <Wrapper>
    <p className="strike">${(0.70 * price)+price}</p>
    <p className="price">${price}</p>
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