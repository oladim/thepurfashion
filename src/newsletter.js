import styled from "styled-components";
import { IconTextField } from "./components/textbox";
// import InputAdornment from '@mui/material/InputAdornment';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';



function NewLetter(){


    return <Wrapper>
        <div className="logo_newletter">
        <div className="image"><img src={require("./assets/images/logo2.png")} alt="logo2"/></div>
        <div className="newsletter">
            <div className="new">NEW TO THEPURFASHION</div>
            <div className="sub">Subscribe to our newsletter to get updates on our latest offers!</div>
            <div>
                <IconTextField 
                    className="test"
                    id="input-with-icon-textfield"
                    placeholder="youremail@domain.com"
                    sx={{ width: '60ch', backgroundColor: "#FFFFFF", borderRadius: "14px", color: "black", textAlign: "center"}}
                    InputProps={{
                        startAdornment: <div className="icon"><MailOutlinedIcon /></div>
                      }}
                    />
                    {/* startAdornment={<InputAdornment position="start"><MailOutlinedIcon /></InputAdornment>} */}

                    {/* startAdornment = (<InputAdornment position="start"><MailOutlinedIcon /></InputAdornment>) */}


            </div>
            <div className="subscribe"><p>Subscribe</p></div>          
        </div>
        </div>
    </Wrapper>
}

export default NewLetter;

const Wrapper = styled.div`

width: 100%;
height: 352.72px;
background: #BC3B62;
margin-top: 100px;
display: flex;
justify-content: center;
align-items: center;

.logo_newletter{
    display: flex;
    align-items: center;
    justify-content: space-between;
    justify-self: center;
    width: 70%;
    .image{
        img{
            object-fit: contain;
            overflow: hidden;
        }
    }
    .newsletter{
        .test{
          
        }
        .new{
         
            height: 19px;
            font-style: normal;
            font-weight: 700;
            font-size: 30px;
            line-height: 19px;
            color: #FFFFFF;
            margin-bottom: 10px;
        }

        .sub{
            height: 20px;
            font-style: normal;
            font-weight: 500;
            font-size: 20px;
            line-height: 16px;
            color: #FFFFFF;
            margin-bottom: 20px;
        }
    }

    .icon{
    margin-right: 10px;
    display: flex;
    alignItems: center; 
    fontSize: 18px;
}
    }

    .subscribe{
      
        width: 120px;
        height: 49.11px;
        border: 3px solid #FFFFFF;
        border-radius: 14px;
        margin-top: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        p{
          
        width: 37px;
        height: 16.35px;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 19px;
        color: #FFFFFF;
         margin-left: -40px;
        }

    }
}



@media (max-width: 992px) {
    .logo_newletter {
      flex-direction: column;
      width:100%;
      overflow: hidden;
      .newsletter{
        margin-top: 20px;
        width: 90%;
      }
    }
  }


  @media (max-width: 601px) {
    
    .test{
        width: 28rem;
    }
  }
`