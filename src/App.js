import NavBar from './components/NavBar';
import Product from './components/Product';
import Products from './components/Products';
import CheckoutPage from './components/CheckoutPage'
import CheckoutCard from './components/CheckoutCard';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
    <NavBar />

    <Switch>
      <Route path="/сheckout-page">
        <CheckoutPage />
      </Route>

      <Route path="/">
        <Products />
      </Route>
    </Switch>

    </div>
    </Router>
  );
}

export default App;
