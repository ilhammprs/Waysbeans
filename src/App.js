import "bootstrap/dist/css/bootstrap.min.css";
import Detail from './pages/Detail';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Page from './pages/Landing';
import AddProduct from "./pages/AddProduct";
import AddTopping from "./pages/AddTopping";
import IncomeTransaction from "./pages/IncomeTransaction";
import Profile from "./pages/Profile";
import Cart from './pages/Cart';
import './assets/styles.css';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<Page/>}/>
            <Route exact path="/product/:id" element={<Detail />}/>
            <Route exact path="/admin" element={<IncomeTransaction />}/>
            <Route exact path="/add-product" element={<AddProduct />}/>
            <Route exact path="/profile" element={<Profile/>} />
            <Route exact path="/add-toping" element={<AddTopping />}/>
            <Route exact path="/cart" element={<Cart />}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
