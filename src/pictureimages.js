import React, {useState} from 'react';
import styled from 'styled-components'; 

const PictureImages = ({images}) => {
  const [imageUrl, setImageUrl] = useState(images[0])
  return <Wrapper>
    
    <div className='product'> <img src={imageUrl.url} alt="product_image" loading='lazy'/></div>
    <div className="gallery">
      {images.map((image, index)=>{
        return <img src={image.url} key={index} alt=""  loading='lazy'
        onClick={()=>setImageUrl(images[index])}/>
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
    object-fit: contain;
    
  }
}

.gallery{
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 1rem;
  margin-top: 1rem
  height: 80px;
  width: 80px;

  img{
    height: 60px;
    width: 60px;
    border: 1px solid #F3A204;
    padding: 10px;
    border-radius: 10px;
  }
}
  img{
   
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