import styled from "styled-components";
import { DealsHeading } from "./allimports";

function TopDeals() {
    return <Wrapper>
        <div className="personalcolor">
        <DealsHeading deal={"Today's Top Deals"}/>
        </div>
    </Wrapper>
}

export default TopDeals;

const Wrapper = styled.div`
width: 90%;
margin-left: auto;
margin-right: auto;
margin-top: 15px;

.personalcolor{
    background: #F3A204;
    border-radius: 33px 33px 0px 0px;
}


`