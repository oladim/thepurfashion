import Main from "./main";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from "./PrivateRoute";
import AuthWrapper from "./AuthWrapper";
// import Checkout from "./checkout";
// import {SingleProductPage} from "./allimports";
import Header from "./header";
import Categories from "./categories";
import Error from "./Error";
import SinglePage from "./singlepage";
import Products from "./products";
// import SingleCar from "./singlecar";
import CartPage from "./pages/CartPage";
// import Checkout from "./checkout";
import CheckoutPage from "./pages/CheckoutPage";
import NewLetter from "./newsletter";
import Footer from "./footer";


function App() {
  return (
<AuthWrapper>
    <Router>
      <Switch>
          <Route exact path='/'><Main /></Route>
          <Route exact path="/products"><Products /></Route>
          <Route exact path="/cart">
            <Header />
            <Categories stats={"My Cart"} />
            <CartPage />
            </Route>
          <Route exact path='/products/:id'>
            
             <Header />
          <Categories stats={"Product Page"} />
            <SinglePage />
          </Route>
         
          
          
          <Route exact path="/checkout">
          <Header />
            <Categories stats={"Checkout Page"} />
            <PrivateRoute><CheckoutPage /></PrivateRoute>
          </Route>
          <Route exact path="*"><Error /></Route>
      </Switch>
    <NewLetter />
    <Footer />
    </Router>
    </AuthWrapper>
  )
}

export default App;
