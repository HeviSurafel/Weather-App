
import './App.css';
import axios from "axios"
import {useState} from "react"
function App() {
const[data,setData]=useState({})
const[location,setLocation]=useState('')

  const url=`https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=89e83b6095c985c9765eccaa78fd083c`
  
  const searchLocation=(event)=>{
   if(event.key==="Enter"){
    axios.get(url).then((Response)=>{
      setData(Response.data)
      console.log(Response.data)
    })
   
   }
    setLocation('')
  }
  
  return (
    <div className="app">
       <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
          <p>{data.name}</p>
          </div>
          <div className="temp">
          {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
            </div>
          <div className="description">{data.weather ? <p>{data.weather[0].main}</p> : null}</div>
        </div>
        <div className="bottom">
        <div className="feel">
        {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : null}
          <p>It feels like</p>
          </div>
        <div className="humudity">
        {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
          <p>Humudity </p>
        
        </div>
        <div className="wind">
        {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
          <p>Wind speed</p>
          </div>
        </div>

      </div>

    </div>

  );
}

export default App;
