import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./header.css"
import { faBed, faCalendar, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import { useState } from "react";
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import { format } from "date-fns";
import { Link, useNavigate } from "react-router-dom";


const Header = ({type}) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options,setOptions] = useState({
    adult: 1,
    Children: 0,
    room: 1,
  });

  
  const navigate = useNavigate()

  const handleOption = (name, operation) =>{
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "I" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/hotels", {state: {destination,date,options} });
  };

    return (
        <div className="header">
          <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
            <div className="headerList">
              <div className="headerListItem active">
                <FontAwesomeIcon icon={faBed} />
                <span>Stays</span>
              </div>
              <div className="headerListItem">
                <FontAwesomeIcon icon={faPlane} />
                <span>Flights</span>
              </div>
              <div className="headerListItem">

                <FontAwesomeIcon icon={faCar} />
                <span>Car rentals</span>
              </div>
              <div className="headerListItem">
                <FontAwesomeIcon icon={faBed} />
                <span>Attractions</span>
              </div>
              <div className="headerListItem">
                <FontAwesomeIcon icon={faTaxi} />
                <span>Airport taxis</span>
                
              </div>
            </div>
            { type !== "list" ?             
            (<>

            <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
            <p className="headerDesc">Get rewarded for your travels – unlock instant savings of 15% or
              more with a free Ethiobooking account.

              </p>
              <button className="headerBtn">Sign in / Register</button>
          <div className="headerSearch">
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faBed} className="headerIcon" />
              <input

                type="text"
                placeholder="Where are you going?"
                className="headerSearchInput"/>
                onChange = {(e) => setDestination(e.target.value)}
                
          </div>
          <div className="headerSearchItem">
              <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
              <span 
              onClick={() => setOpenDate(!openDate)}
              className="headerSearchText">
                {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}
                </span>
              {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
              )}
          </div>
          <div className="headerSearchItem">
              <FontAwesomeIcon icon={faPerson} className="headerIcon" />
              <span className="headerSearchText" onClick={()=> setOpenOptions(!openOptions)}  >{`${options.adult} adult · ${options.Children} children · ${options.room} room`} </span>
              {openOptions && <div className="options">
                <div className="optionItem">
                  <span className="optionText">Adult</span>
                  <div className="optionCounter">
                    <button 
                    disabled ={options.adult <= 1}
                    className="optionCounterButton" onClick={()=>handleOption ("adult","D")}>-</button>
                    <span className="optionCounterNumber">{options.adult}</span>
                    <button className="optionCounterButton" onClick = {()=>handleOption("adult","I")}>+</button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optionText">Children</span>
                  <div className="optionCounter">
                    <button 
                    disabled ={options.Children <= 0}
                    className="optionCounterButton" onClick={()=>handleOption("Children","D")}>-</button>
                    <span className="optionCounterNumber">{options.Children}</span>
                    <button className="optionCounterButton" onClick={()=>handleOption("Children","I")}>+</button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optionText">Room</span>
                  <div className="optionCounter">
                    <button 
                    disabled ={options.room <= 1}
                    className="optionCounterButton" onClick={()=>handleOption("room","D")}>-</button>
                    <span className="optionCounterNumber">{options.room}</span>
                    <button className="optionCounterButton" onClick={()=>handleOption("room","I")}>+</button>
                  </div>
                </div>
              </div>
              }
          </div>
          <div className="headerSearchItem">
              <button className="headerBtn" onClick={handleSearch}>Search</button>
          </div>
            </div>
             </>) : null }
          </div>
        </div>
        
   )
}

export default Header
