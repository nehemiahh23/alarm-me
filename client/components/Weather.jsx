import { useEffect, useState } from 'react'

function Weather({ lat, long, weather, setWeather }) {

  const current = new Date()
  const parsed = current.getHours()

  useEffect(() => {
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timeformat=unixtime&timezone=America%2FNew_York&forecast_days=1`)
    .then(r => r.json())
    .then(data => setWeather(data))
  }, [])

  console.log(weather)

  return (
    <>
        <span> { weather.hourly.temperature_2m[parsed] } °F</span>
    </>
  )
}

export default Weather