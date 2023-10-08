import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Banner from "./../sections/Banner/Banner";
import Service from "../components/Service/Service";

const Home = () => {
    return ( 
        <>
            <Navbar />
            <Banner />
            <Service />
        </>
     );
}
 
export default Home;