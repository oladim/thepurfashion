import Header from "./header";
import Categories from "./categories";
import FlashSales from "./flashsales";
import TopDeals from "./topdeals";
import TopCategories from "./topcat";
import NewProducts from "./new_products";
// import AllProducts from "./all_products";
// import {NewLetter, Footer} from "./allimports";
import NewLetter from "./newsletter";
import Footer from "./footer";


function Main(){
    return <div>
        <div style={{position: "fixed", width: "100%"}}>
        <Header />
        <Categories />
        </div>
       <div style={{paddingTop: "130px"}}>
        <FlashSales />
        <TopDeals />
        <TopCategories />
        <NewProducts />
        {/* <AllProducts /> */}
        <NewLetter />
        <Footer />
        </div>
        
    </div>
}


export default Main;