import "./hotel.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import MailList from "../../components/mailList/MailList"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot"
import { useState } from "react"
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark } from "@fortawesome/free-solid-svg-icons"

const Hotel = () => {

  const[slideNumber, setSlideNumber] = useState(0);
  const[open, setOpen] = useState(false);
  const photos = [
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/336582317.jpg?k=29d57859ffc7bf7e673565e6d487a7acfff9ce4e9c3c6f13fc2a08c4e33b1f85&o=&hp=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/403985874.jpg?k=31a5cc4f6105dafecccc2bc60a804dc5e8b0360fd027e09ae3485e9a8944e49b&o=&hp=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/153937477.jpg?k=82a3e4a701d7d534b32ea6e96eaeecb466903e107b9bd07298abbf2f08024ff9&o=&hp=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/336588539.jpg?k=5670128c817483102c8e83e1b09f6965096cd7c2bfceee4a83dae6fa5ba8597d&o=&hp=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/351072016.jpg?k=285441458d495d3c3cd30a7eeb934ab87eadceff9f2843523903c8ccf44b4616&o=&hp=1"
    },
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/403985858.jpg?k=9d07336797a8e03c62832e9666892de67abb124f53e10c1ceee1fc4a61083bb6&o=&hp=1"
    },
  ];

const handleOpen = (i) => {
  setSlideNumber(i);
  setOpen(true);
};

const handleMove = (direction) => {
  let newSlideNumber;

  if(direction==="l"){
    newSlideNumber = slideNumber ===0 ? 5 : slideNumber-1;
  }else{
    newSlideNumber = slideNumber === 5 ? 0 : slideNumber+1;
  }
  setSlideNumber(newSlideNumber);
};

  return (
    <div>
      <Navbar />
      <Header type="list"/>
      <div className="hotelContainer">
       {open && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)} />
          <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")} />
          <div className="sliderWrapper">
            <img src={photos[slideNumber].src} alt="" className="sliderImg" />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("r")} />
        </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAdress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>Elton St New york</span>
          </div>
          <span className="hotelDistance">
            Excellent location  – 500 from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a freeairport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo,i)=>(
              <div className="hotelImgWrapper">
                <img
                  onClick={()=>handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
               />
             </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1>Stay in  the heart of Krakow</h1>
              <p className="hotelDesc"> 
                  The hotel is located in the heart of Krakow,
                  in the historic center of the city.
                  It is a short walk from the Old Town
                  and the main train station. The hotel
                  is situated in a beautiful location,
                  with a great view of the Old Town and the river Vistula.
                  The nearest airport is John Paul II International
                  Balice,16.01 km from Street Apartements,
                and property offers a paid shuttle service..
               </p> 
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Locared in the real heart of krakow, this property has an
                 excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b>(9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Hotel;