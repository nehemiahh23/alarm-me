import { useState, useEffect } from "react"
import Next from "../components/Next.jsx"
import Weather from "../components/Weather.jsx"
import AlarmContainer from "../components/AlarmContainer.jsx"

function App() {

  const [lat, setLat] = useState(0)
  const [long, setLong] = useState(0)

  const [current, setCurrent] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setCurrent(new Date()), 60000)
    return () => clearInterval(interval)
  }, [])

  // #region geolocation
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  } else {
    console.log("Geolocation not supported by this browser");
  }
  
  function success(position) {
    setLat(position.coords.latitude);
    setLong(position.coords.longitude);
  }
  
  function error() {
    console.log("Unable to retrieve your location");
  }
  // #endregion

  return (
    <>
      <Next/>
      { lat && long ? <Weather lat={lat} long={long} current={current}/> : "Loading..."}
      <AlarmContainer/>
    </>
  )
}

export default App
