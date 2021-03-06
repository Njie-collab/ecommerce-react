import React,{HashRouter,Routes as Switch,Route} from 'react-router-dom'
import MyProvider from "../context/MyProvider";
import Header from '../components/Header'
import Footer  from '../components/Footer'
import About from "../components/pages/About"
import Home from "../components/pages/Home"
import Cart from "../components/pages/Cart";
import Checkout from "../components/pages/Checkout";
import Products from "../components/pages/Products";
import ProductDetails from "../components/pages/ProductDetails";
import NotFound404 from '../components/pages/NotFound404'
import Reducer from '../components/Reducer'


const Routes = () => {
    return (
        <MyProvider>
            <HashRouter>
                <Header/>
                <Switch>
               <Route path="/" element={<About/>}/>
               <Route path="/home" element={<Home/>}/>
               <Route path="/cart" element={<Cart/>}/>
               <Route path="/products" element={<Products/>}/>
               <Route path="/product-detail" element={<ProductDetails/>}/>
               <Route path="/checkout" element={<Checkout/>}/>
               <Route path="/notfound404" element={<NotFound404/>}/>
               <Route path="/reducer" element={<Reducer/>}/>
               
                </Switch>
             <Footer/>
            </HashRouter>
        </MyProvider>
    )
}

export default Routes
