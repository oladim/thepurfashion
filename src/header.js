import styled from "styled-components";

import {useUserContext} from "./context/user_context";
import { Link } from "react-router-dom";
import { useCartContext } from "./context/cart_context";


const logo = require("./assets/images/logo.png");

function Header() {
const {total_items} = useCartContext();
    const { loginWithRedirect, myUser, logout } = useUserContext()

    return <Wrapper>
        <div className="header">
        <Link to="/"><img className="logo" src={logo} alt="Thepurfashion logo"/></Link>
        <div className="login_cart">
            
        {myUser ? (
        <div
          type='button'
          className='login'
          onClick={() => {
            // clearCart()
            // localStorage.removeItem('user')
            logout({ returnTo: window.location.origin })
          }}
        >
          Logout 
        </div>
      ) : (
        <div className="login" onClick={loginWithRedirect}>Login</div>
         
      )}

            <Link to="/cart">
            <div className="cart">
                <p>MY CART</p>
                <div className="item">{total_items}</div>
            </div>
            </Link>
        </div>
        </div>
        
    </Wrapper>
}

export default Header;

const Wrapper = styled.div`
background: #FFFFFF;

.header{
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    margin-left: auto;
    margin-right: auto;
    z-index: 1;
    

    .logo{
        width: 203.6px;
        height: 42.35px;
        }

        .login{
            width: 90px;
            height: 2rem;
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 16px;
            color: #464646;
            margin-right: 20px;
            cursor: pointer;
            display: flex;
                justify-content: center;
                align-items: center;
                
            }
            .login:hover{
                border: 2px solid #BC3B62;
                border-radius: 1rem;
                
            }
    .login_cart{
        display: flex;
        align-items: center;
        cursor: pointer;
        .cart{
            width: 120.04px;
            height: 30px;
            background: #077726;
            border-radius: 30px;
            padding: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
           p{
            color: #FFFFFF;
            font-style: normal;
            font-weight: 800;
            font-size: 12px;
            line-height: 14px;
           
           }
            .item{
            display: flex;
            align-items: center;
        width: 16.61px;
        height: 16.46px;
        border-radius: 50%;

background: #FFFFFF;
margin-left: 5px;
justify-content: center;
            }
        }

    }        
}

@media (max-width: 601px) {
    .login{
        margin-left: 1rem;
        border: 2px solid #BC3B62;
        border-radius: 1rem;
    }

    .header {
        padding: 10px;
      .logo{
      width: 150px;
      }

      .login_cart{
        flex-direction: column;
        gap: 10px;

        .cart{
            height: 20px;
            width: 80px;
        }
      }
  }
  }

  @media (max-width: 360px) {
    .header {
        padding: 10px;
      .logo{
      width: 150px;
      }

      .login_cart{
        flex-direction: column;
        gap: 10px;

        .cart{
            height: 20px;
            width: 80px;
        }
      }
  }

`