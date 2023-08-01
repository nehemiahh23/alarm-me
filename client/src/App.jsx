import { useState } from "react"
import Next from "../components/Next.jsx"
import Weather from "../components/Weather.jsx"
import AlarmContainer from "../components/AlarmContainer.jsx"
import AlarmCard from "../components/AlarmCard.jsx"

function App() {

  const [lat, setLat] = useState(0)
  const [long, setLong] = useState(0)

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  } else {
    console.log("Geolocation not supported");
  }
  
  function success(position) {
    setLat(position.coords.latitude);
    setLong(position.coords.longitude);
  }
  
  function error() {
    console.log("Unable to retrieve your location");
  }

  return (
    <>
      <Next/>
      { lat && long ? <Weather lat={lat} long={long}/> : "Loading..."}
      <AlarmContainer/>
    </>
  )
}

export default App
