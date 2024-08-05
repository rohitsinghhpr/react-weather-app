import { useEffect, useState } from "react";
import axios from "axios";
import Search from "./components/Search";
import Current from "./components/Current";
import Astro from "./components/Astro";
import Hours from "./components/Hours";
import Forecast from "./components/Forecast";
import "./assets/css/searchbar.css";
export default function App() {
   const [query, setQuery] = useState("");
   const [value, setValue] = useState("");
   // get from data state
   const [location, setLocation] = useState(null); // store obj
   const [current, setCurrent] = useState(null); // store obj
   // store array of forecast day
   const [forecast, setForecast] = useState([]);

   function getData() {
      axios({
         method: 'get',
         url: `https://api.weatherapi.com/v1/forecast.json?key=c03e61eb314d4db2bfc42040242207&q=${query}&days=10&aqi=yes&alerts=yes`
      }).then(function (response) {
         setLocation(response.data.location);
         setCurrent(response.data.current);
         setForecast(response.data.forecast.forecastday);
      }).catch(function (e) {
         console.log(e);
      });
   }

   useEffect(() => {
      if (query !== "") {
         getData();
         document.title = `${query} wheather`
      }
   }, [query]);

   return <>
      <div className="container-fluid py-3 bg-light border-bottom" id="serach-bar">
         <Search setQuery={setQuery} value={value} setValue={setValue} />
      </div>
      {query !== "" && <main className="main container-fluid py-5">
         {current !== null &&
            <div className="container mb-5">
               <div className="row mb-5">
                  <div className="col-md-6">
                     <Current location={location} current={current} />
                  </div>
                  <div className="col-md-3">
                     <h1 className="h3">Sun/Moon</h1>
                     <Astro astro={forecast[0].astro} />
                  </div>
               </div>
               <Hours hours={forecast[0].hour} />
            </div>}
         {forecast.length !== 0 &&
            <div className="container">
               <h1>10 DAY FORECAST</h1>
               <Forecast forecast={forecast} />
            </div>}
      </main>}
   </>
}   
