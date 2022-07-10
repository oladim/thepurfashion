import styled from "styled-components";

function Footer(){
    return <Wrapper>
        <div className="footer">
            <div className="contact">
                <p className="address">5123 Market St. #22B Charlottesville, California 44635</p>
                <div className="phone">
                <p>(434) 546-4356</p>
                <p>contact@thepurfashion.com</p>
                <p className="reserved2">© 2022 Thepurfashion. All rights reserved.</p>
                </div>
            </div>
            <div className="about">
                <ul>
                <li>About</li>
                <li>Growers</li>
                <li>Merchants</li>
                <li>Partners</li>
                <li>Contact</li>
                </ul>
                <div className="rights">
                    <p></p>
                    <p className="reserved">© 2022 Thepurfashion. All rights reserved.</p>
                </div>
            </div>
            <div className="social">
            <ul>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Linkedin</li>
                <li>Instagram</li>
                </ul>
            </div>
            <div className="arrow">
                <img src={require("./assets/images/arrow.png")} alt="arrow"/>
            </div>
        </div>
    </Wrapper>
}

export default Footer;


const Wrapper = styled.div`
.footer{
    display: flex;
    justify-content: space-between;
    margin-top: 80px;
    margin-bottom: 150px;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    height: 300px;

    .arrow{
        width: 80px;
        height: 80px;
        background: #BC3B62;
        border-radius: 50%;
        margin-top: 20px;
        display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
    }
    .social{
       
        ul{
            padding-left: 0;
            li{
                list-style: none;
                margin-bottom: 10px;
            }
        }
    }
.about{
  
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
.rights{
    margin-top: 100px;
    width: 100%;
}
    .reserved{
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: #0A142F;
        opacity: 0.65;
        
    }
    ul{
        margin-left: -40px;
        li{
            list-style: none;
            margin-bottom: 10px;
        }
    }
}
    .contact{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 500px;
        .phone{
            width: 100%;
        }
        .address{
            width: 60%;
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 36px;
            color: #0A142F;
        }
        div{
            width: 107px;
            height: 22px;
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 22px;
        }
    }
}

@media (max-width: 992px) {
    .arrow {
     visibility: hidden;
    }
  }

  @media (min-width: 601px) {
    
    .footer {
     .reserved2{
        display: none;
     }
    }
  }

  @media (max-width: 600px) {
    
    .footer .contact{
        width: 100%;
    }
    .footer .about, .social {
        display: none;
     .reserved{
        display: none;
     }
    }
  }
`