import React from 'react';
import {Route, Routes} from "react-router";
import Header from "./components//Header";
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contacts from "./components/Contacts";
import Why from './components/Why.jsx'



function App() {
    return (
        <div className="">

                <Header/>


            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/about"} element={<About/>}/>
                <Route path={"/contacts"} element={<Contacts/>}/>
                <Route path={"/why"} element={<Why/>}/>
            </Routes>


                <Footer/>
        </div>
    );
}

export default App;
