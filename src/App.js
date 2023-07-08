import {Routes, Route} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Catalog from "./pages/Catelog/Catalog";
import OneProduct from "./pages/OneProduct/OneProduct";
import Cart from "./pages/Cart/Cart";
import Favorites from "./pages/Favorites/Favorites";
import Register from "./pages/Register/Register";
import Login from "./pages/Register/Login";
import Checkout from "./pages/Checkout/Checkout";
import AdminPanel from "./pages/AdminPanel/AdminPanel";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path={''} element={<Layout/>}>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/about'} element={<About/>}/>
                <Route path={'/shop'} element={<Catalog/>}/>
                <Route path={'/product/:id'} element={<OneProduct/>}/>
                <Route path={'/cart'} element={<Cart/>}/>
                <Route path={'/favorites'} element={<Favorites/>}/>
                <Route path={'/checkout'} element={<Checkout/>}/>
                <Route path={'/admin-panel'} element={<AdminPanel/>}/>
            </Route>
            <Route path={'/register'} element={<Register/>}/>
            <Route path={'/login'} element={<Login/>}/>
        </Routes>
    </div>
  );
}

export default App;
