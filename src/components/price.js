import styled from "styled-components";

function Price() {
    return <Wrapper>
    <p className="strike">$2000</p>
    <p className="price">$200</p>
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