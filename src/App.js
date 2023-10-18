import React from 'react';
import {Route, Routes} from "react-router";
import Header from "./components//Header";
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contacts from "./components/Contacts";
import Why from './components/Why.jsx'
import ProductPage from "./components/Products/ProductPage";
import SingleProduct from "./components/Products/SingleProduct";



function App() {
    return (
        <div className="">

                <Header/>


            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/about"} element={<About/>}/>
                <Route path={"/product"} element={<ProductPage/>}/>
                <Route path={"/contacts"} element={<Contacts/>}/>
                <Route path={"/why"} element={<Why/>}/>
                <Route path="/product/:id" element={<SingleProduct />} />
            </Routes>


                <Footer/>
        </div>
    );
}

export default App;
