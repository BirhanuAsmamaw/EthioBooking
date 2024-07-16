import "./featureProperties.css"

const FeatureProperties = () => {
    return (
        
        <div className="fp">
            <div className="fpItem">
                <img src="/assets/AA - Sheraton.webp" alt="" className="fpImg" /> 
                <span className="fpName">sheraton Addis hotel</span>
                <span className="fpCity">Addis Ababa</span>
                <span className="fpPrice">Starting from <b>ETB 1500</b></span>
                <div className="fpRating">
                    <button className="fpRatingButton">9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img src="/assets/Hawassa-HaileResort.jpg" alt="" className="fpImg" /> 
                <span className="fpName">Haile Resort</span>
                <span className="fpCity">Hawassa</span>
                <span className="fpPrice">Starting from <b>ETB 1350</b></span>
                <div className="fpRating">
                    <button className="fpRatingButton">8</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img src="/assets/Ruth Hotel.jpg" alt="" className="fpImg" /> 
                <span className="fpName">Ruth Hotel</span>
                <span className="fpCity">Gondar</span>
                <span className="fpPrice">Starting from <b>ETB 1300</b></span>
                <div className="fpRating">
                    <button className="fpRatingButton">7</button>
                    <span >Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img src="/assets/Adma-MARRAKECH.jpg" alt="" className="fpImg" /> 
                <span className="fpName">MARRAKECH</span>
                <span className="fpCity">Adama</span>
                <span className="fpPrice">Starting from <b>ETB 1200</b></span>
                <div className="fpRating">
                    <button className="fpRatingButton">7</button>
                    <span>Excellent</span>
                </div>
            </div>
            
               
        </div>
        
    )
}

export default FeatureProperties;
