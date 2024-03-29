import Footer from "../footer/Footer"
import Navbar from "../navbar/Navbar"
import "./hoteltype.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

import {faHotel,faHouseUser,faBuildingColumns,faUmbrellaBeach} from "@fortawesome/free-solid-svg-icons"
import {faMountainCity} from "@fortawesome/free-solid-svg-icons"
import {faCalendarDays} from "@fortawesome/free-solid-svg-icons"
import {faPerson} from "@fortawesome/free-solid-svg-icons"
import {DateRange} from "react-date-range"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css filenp
import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import {format} from "date-fns"
import { useContext } from "react"
import { SearchContext } from "../../context/SearchContext"
import { AuthContext } from "../../context/AuthContext"
import MailList from "../mailList/MailList"




const HotelType=({type})=>{

    const { user }=useContext(AuthContext)
    const [openDate,setOpenDate]=useState(false)
    const [destination,setDestination]=useState("")
    

    const [dates,setDates]=useState([
        {
        startDate:new Date(),
        endDate:new Date(),
        key:"selection"
        },
    ]);
    const [openOptions,setOpenOptions]=useState(false)
    const [options,setoptions]=useState({
        adult:1,
        children:0,
        room:1,

    });
    const navigate=useNavigate()
    const handleOptions=(name,operation)=>{
        setoptions(prev=>{
            return{

                ...prev,
                [name]:operation === "i" ? options[name] +1 :options[name] -1,
            };
        });
    }
    const {dispatch}=useContext(SearchContext)
    const handleInput=()=>{
        if(destination===""){
            alert("Please enter destination")
        }else{
            handleSearch()
        }
    }
    const handleSearch=()=>{
        dispatch({type:"NEW_SEARCH",payload:{destination,dates,options}})
        navigate("/typehotellist",{state:{destination,dates,options}})

    }
    return(
        
        <div>
            <Navbar/>
            <div className="header">
            <div className={type ==="list" ? "headerContainer listMode" :"headerContainer"}>

               
            <div className="headerList">
                    <div className="headerListItem active">
                    <FontAwesomeIcon icon={ faHouseUser} />
                    <span>
                    <NavLink
              to="/"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Home
            </NavLink>
                    </span>

                    </div>
                    <div className="headerListItem active">
                    <FontAwesomeIcon icon={ faHotel} />
                    <span>
                    <NavLink
              to="/allhotels"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Hotels
            </NavLink>
                    </span>
                    
                    </div>
                    <div className="headerListItem active">
                    <FontAwesomeIcon icon={faMountainCity}/>
                    <span>
                    <NavLink
              to="/allapartments"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Apartments
            </NavLink>
                    </span>
                    
                    </div>
                    <div className="headerListItem active">
                    <FontAwesomeIcon icon={ faBuildingColumns} />
                    <span>
                    <NavLink
              to="/allvillas"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Villas
            </NavLink>
                    </span>
                    
                    </div>
                    <div className="headerListItem active">
                    <FontAwesomeIcon icon={faUmbrellaBeach} />
                    <span>
                    <NavLink
              to="/allresorts"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Resorts
            </NavLink>
                    </span>
                    
                    </div>
                </div>
                { type !=="list" &&
                
                <>
                <h1 className="headerTitle">Find your next stay</h1>
                <p className="headerDesc">Search deals on hotels, apartments, and much more...</p>
                {! user &&  <button  className="headerBtn">
                <NavLink
                to="/register"
                style={{ textDecoration: "none", color: "inherit" }}
              >
              Sign in/ Register
              </NavLink>
                    </button>}
                <div className="headerSearch">
                    <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faHotel} className="headerIcon" />
                   
                   <input type="text"  placeholder="Where Are You Going?" className="headerSearchInput" onChange={e=>setDestination(e.target.value)} />
                    

                 



                    </div>
                    <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                    <span onClick={()=>setOpenDate(!openDate)} className="headerSearchText">{`${format(dates[0].startDate,"dd/MM/yyyy")} to ${format(dates[0].endDate,"dd/MM/yyyy")} `}</span>
                    {openDate &&<DateRange
                    editableDateInput={true}
                    onChange={(item) =>setDates([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={dates}
                    className="date" minDate={new Date()}
                    />}


                    </div>
                    <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                    <span onClick={()=>setOpenOptions(!openOptions)} className="headerSearchInput"> {`${options.adult} adult . ${options.children} children .${options.room} room`}</span>
                    { openOptions &&<div className="options">
                        <div className="optionItem">
                            <span className="optionText">Adult</span>
                            <div className="optionCounter">
                                <button  disabled={options.adult<=1} className="optionCounterButton" onClick={( )=> handleOptions("adult","d")}>-</button>
                                <button className="optionCounterNumber">{options.adult}</button>
                                <button className="optionCounterButton" onClick={( )=> handleOptions("adult","i")}>+</button>
                            </div>


                        </div>
                        <div className="optionItem">
                            <span className="optionText">Children</span>
                            <div className="optionCounter">
                                <button  disabled={options.children<=0 }className="optionCounterButton" onClick={( )=> handleOptions("children","d")}>-</button>
                                <button className="optionCounterNumber">{options.children}</button>
                                <button className="optionCounterButton" onClick={( )=> handleOptions("children","i")}>+</button>
                            </div>
                            


                        </div>
                        <div className="optionItem">
                            <span className="optionText">Rooms</span>
                            <div className="optionCounter">
                                <button disabled={options.room <=1} className="optionCounterButton" onClick={( )=> handleOptions("room","d")}>-</button>
                                <button className="optionCounterNumber">{options.room}</button>
                                <button className="optionCounterButton" onClick={( )=> handleOptions("room","i")}>+</button>
                            </div>


                        </div>
                    </div>}


                    </div>
                    <div className="headerSearchItem">
                    <button className="headerBtn" onClick={handleInput}>Search</button>


                    </div>

                </div></>}
            </div>
            

        </div>
            
            

            <div className="homeContainer">
            <div><h1>Search For City To Get Hotels...</h1></div>
            <MailList/>
                <Footer/></div>
        </div>

    )
}
export default HotelType