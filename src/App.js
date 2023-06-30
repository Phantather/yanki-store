import {Routes, Route} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Catalog from "./pages/Catelog/Catalog";
import OneProduct from "./pages/OneProduct/OneProduct";
import Cart from "./pages/Cart/Cart";
import Favorites from "./pages/Favorites/Favorites";
import Register from "./pages/Register/Register";

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
            </Route>
            <Route path={'/register'} element={<Register/>}/>
        </Routes>
    </div>
  );
}

export default App;
