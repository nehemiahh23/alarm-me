import { useEffect, useState } from 'react'
import AlarmCard from './AlarmCard'

function AlarmContainer() {

    const [alarms, setAlarms] = useState([])

    useEffect(() => {
        fetch('http://localhost:3002/alarms')
        .then(r => r.json())
        .then(data => setAlarms(data))
    }, [])

    const mapped = alarms.map(alarm => <AlarmCard key={alarm.id} enabled={alarm.enabled} time={alarm.time} rpt-days={alarm.rptDays} label={alarm.label} />)

  return (
    <>
        { mapped }
    </>
  )
}

export default AlarmContainer