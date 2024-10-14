import "./propertyList.css" 

const PropertyList = () => {
    return (
        <div className="pList">
            <div className="pListItem">
                <img src="/assets/Langano.jpg" alt="" className="pListImg" />
           
                <div className="pListTitles">
                    <h1>Resorts</h1>
                    <h2>200 hotels</h2>
                </div>
            </div>

            <div className="pListItem">
                <img src="/assets/kuriftu-Bishoftu.jpg" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Hotels</h1>
                    <h2>160 hotels</h2>
                </div>
            </div>

            <div className="pListItem">
                <img src="/assets/villas-Ethio.webp" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Villas</h1>
                    <h2>135hotels</h2>
                </div>
            </div>

            <div className="pListItem">
                <img src="/assets/Sheraton-Addis-Fountain.jpg" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Apartments</h1>
                    <h2>180 hotels</h2>
                </div>
            </div>

            <div className="pListItem">
                <img src="/assets/Kuriftu-Bahir-Dar.avif" alt="" className="pListImg" />
            
                <div className="pListTitles">
                    <h1>Pensions</h1>
                    <h2>210 hotels</h2>
                </div>
            </div>
            
        </div>

    )
}

export default PropertyList
