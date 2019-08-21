import React, { Component } from "react";
import "./style.css";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";

class Home extends Component {
    constructor(props) {
        super(props);

    }



    render() {
     return (
         <div>
            <Banner />
            <Navbar />
        </div>   
     )       
    }



};

export default Home;