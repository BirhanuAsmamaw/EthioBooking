import React from "react";
import "./feature.css"

const Feature = () => {
    return (
        <div className="feature" >

            <div className="featureItem">
             <img src="/assets/Addis-Ababa-2022.png" alt="" className="featureImg" />
             <div className="featureTitles">
              <h1>Addis Ababa</h1>  
              <h2> 200 properties</h2>
             </div>
            </div>
            <div className="featureItem">
             <img src="/assets/Hawassa.jpg" alt="" className="featureImg" />
             <div className="featureTitles">
              <h1>Hawassa</h1>  
              <h2>168 properties</h2>
             </div>
            </div>
            <div className="featureItem">
             <img src="/assets/kuriftu-Bishoftu.jpg" alt="" className="featureImg" />
             <div className="featureTitles">
              <h1>Bishoftu</h1>  
              <h2>180 properties</h2>
             </div>
            </div>
        </div>
    )
}

export default Feature
