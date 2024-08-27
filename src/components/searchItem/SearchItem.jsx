import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
        <img 
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/13125860.jpg?k=b5f4783a8a6ecf84738e080755acfebf943253d71f4458fbe2510a356cf3d8c8&o=&hp=1"
         alt="" 
         className="siImg"
         />
         <div className="siDesc">
          <h1 className="siTitle">Tower Street Apartements</h1>
          <span className="siDistance"> 500m from center</span>
          <span className="siTaxiOp"> Free airport taxi</span>
          <span className="siSubtitle">
            Studio Apartement with Air conditioning
          </span>
          <span className="siFeatures">
            Entire studio • 1 bathroom • 21m² 1 full bed
          </span>
          <span className="siCancelOp">Free concellation</span>
          <span className="siCancelOpSubsititle">
            you can cancel,so lock in this great price today!
          </span>
         </div>
         <div className="siDetails">
          <div className="siRating">
            <span>Excellent</span>
            <button>8.9</button>  
          </div> 
          <div className="siDetailTexts">
            <span className="siPrice">$123</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className="siCheckButton">See availability</button>
          </div>
        </div>
    </div>
  )
}

export default SearchItem