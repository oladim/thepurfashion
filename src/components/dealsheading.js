import styled from "styled-components";

function DealsHeading({deal}){
    return <Wrapper>
        
   
    <div className="heading">
        <p>{deal}</p>
    </div>
  
    

</Wrapper>
}

export default DealsHeading;

const Wrapper = styled.div`

width: 100%;

.heading{
    height: 70.19px;
    display: flex;
    align-items: center;

    p{
        width: 185px;
        height: 21px;
        ont-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;
        text-transform: uppercase;
        color: #FFFFFF;
        margin-left: 25px;
       
    }
}
`