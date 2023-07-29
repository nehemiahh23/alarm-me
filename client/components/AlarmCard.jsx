import { useState } from 'react'

function AlarmCard({ id, enabled, time, rptDays, label }) {

    // #region rptDays
    let rptMessage = ""
    const daysArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    if (rptDays.length == 0) {
        rptMessage = "One-time"
    }
    else if (rptDays.length == 5 && !rptDays.includes(1) && !rptDays.includes(7)) {
      rptMessage = "Weekdays"
    }
    else if (rptDays.length == 2 && rptDays.includes(1) && rptDays.includes(7)) {
      rptMessage = "Weekends"
    }
    else if (rptDays.length == 7) {
      rptMessage = "Every day"
    }
    else {
        rptDays.forEach(day => {
          rptMessage += daysArr[day - 1]
        })
    }
    // #endregion

    // #region enabled
    const [toggle, setToggle] = useState(enabled)

    function clickHandler() {
      setToggle(!toggle)

      // fetch(`http://localhost:3002/alarms/${id}`, {
      //     method: 'PATCH',
      //     headers: {
      //         'Content-Type': 'application/json',
      //         'Accepts': 'application/json'
      //     },
      //     body: JSON.stringify({enabled: toggle})
      // })
      // .then(r => r.json)
    }
    // #endregion

  return (
    <div>
        <span onClick={clickHandler}>{ toggle ? "✅" : "❌" }</span>
        <br/>
        <h2>{ time }</h2>
        <br/>
        { rptMessage }
        <br/>
        { label }
        <br/>
    </div>
  )
}

export default AlarmCard