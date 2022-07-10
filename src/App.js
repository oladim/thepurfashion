import Main from "./main";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from "./PrivateRoute";
import AuthWrapper from "./AuthWrapper";
import Checkout from "./checkout";
// import {SingleProductPage} from "./allimports";
import Header from "./header";
import Categories from "./categories";
import Error from "./Error";
import SingleProductPage from "./singleproductpage";

function App() {
  return (
<AuthWrapper>
    <Router>
      {/* <Header /> */}
      <Switch>
          <Route exact path='/'><Main /></Route>
          <Route exact path="/checkout"><PrivateRoute><Checkout /></PrivateRoute></Route>
          <Route exact path="/products/:id">
            <Header />
            <Categories stats={"Product Page"}/>
          <SingleProductPage />
          </Route>
          <Route path="*"><Error /></Route>
          </Switch>
    </Router>
    </AuthWrapper>
  );
}

export default App;
