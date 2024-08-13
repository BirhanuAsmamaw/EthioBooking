import "./list.css"
import Header from '../../components/header/Header';
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

const hotels = [
  { id: 1, image: "AA - Sheraton.webp" },
  { id: 2, image: "AA-intercontinental.jpg" },
  { id: 3, image: "Adma-MARRAKECH.jpg" },
  { id: 4, image: "Axum-Axum-Hotel.jpg" },
  { id: 5, image: "Bd-NileView.jpg" },
  { id: 6, image: "Hawassa-HaileResort.jpg" },
  { id: 7, image: "Gondar-Goha.jpg" },
  { id: 8, image: "Hawassa.jpg" }
];


const List = () => {
  const location = useLocation()
  const [destination, setDestination] = useState(location.state?.destination);
  const [date, setDate] = useState(location.state?.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state?.options);

  return ( 
    <div>
      {/* <Navbar/> */}
      <Header type={"list"}/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label >Destination</label>
              <input  placeholder={destination} type="text" />
            </div>
            
            <div className="lsItem">
              <label > Check-in Date</label>
              {date ?( <span onClick={() => setOpenDate(!openDate)}>{`${format(
                  date[0].startDate,
                  "MM/dd/yyyy"
                )} to ${format( date[0].endDate, "MM/dd/yyyy")}`}
              </span>): null}
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options?.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options?.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options?.room}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
          {hotels.map((hotel) => (
                <SearchItem key={hotel.id} id={hotel.id} image={hotel.image} />
            ))}
            </div>
        </div>
      </div>
      <MailList />
      <Footer />
    </div>
  )
}

export  default List;
