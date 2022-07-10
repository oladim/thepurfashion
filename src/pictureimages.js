import React, {useState} from 'react';
import styled from 'styled-components'; 

const PictureImages = ({images}) => {
  const [image, setImage] = useState(images[0])
  return <Wrapper>
    
    <div className='product'> <img src={image.url} alt=""/></div>
    <div className="gallery">
      {images.map((image, index)=>{
        return <img src={image.url} key={index} alt="" 
        onClick={()=>setImage(images[index])}/>
      })}
    </div>
  
  </Wrapper>
}

export default PictureImages;

const Wrapper = styled.section`
display: grid;
grid-template-rows: 1fr 1fr;



.product{
  width: 420px;
  height: 300px;
  

  img{
    width: 420px;
    height: 100%;
    border-radius: 4px;
    object-fit: cover;
    
  }
}

.gallery{
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 1rem;
  margin-top: 1rem
}
  img{
    height: 85px;
    cursor: pointer;
    object-fit: cover;
  }
  @media (max-width: 576px) {
    .main-image {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
`