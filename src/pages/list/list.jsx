
import "./list.css"
import Header from '../../components/header/Header';
import { useLocation } from "react-router-dom";


const List = () => {
  
  const location = useLocation()

  console.log(location)
  return (
    <div>
      {/* <Navbar/> */}
      <Header />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem"></div>
          </div>
          <div className="listResult"></div>
        </div>
      </div>
      
      
    </div>
  )
}

export  default List;