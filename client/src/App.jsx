import React from "react"
import Next from "../components/Next.jsx"
import Weather from "../components/Weather.jsx"
import AlarmContainer from "../components/AlarmContainer.jsx"
import AlarmCard from "../components/AlarmCard.jsx"

function App() {

  return (
    <>
      <Next/>
      <Weather/>
      <AlarmContainer/>
      <AlarmCard/>
    </>
  )
}

export default App
