import styled from "styled-components";



function Category(item) {
    return <Wrapper>
        <div className="cate">
        <img src={item.url} alt="image_file"/>
        </div>
        
        <div className="itemname">{item.name}</div>
    </Wrapper>
}

export default Category;

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

.cate{
    border-radius: 20px;
    width: 249.34px;
    height: 166.31px;
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
        overflow: hidden;
        cursor: pointer;
    }
    
}
.itemname{
    margin-top: 10px;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    text-transform: capitalize;
    color: #797979;
        }
`