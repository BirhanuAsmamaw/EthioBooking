import React from 'react'
import Feature from "../../components/feature/Feature";
import FeatureProperties from "../../components/featureProperties/FeatureProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import PropertyList from "../../components/propertyList/propertyList";
import "./home.css"

const Home = () => {
  return (
    <div>
      <Header/>
      <div className="homeContainer">
        <Feature/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Homes Most Guests prefer</h1>
        <FeatureProperties/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  );   
};

export default Home;
