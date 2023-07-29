import useEffect from 'react'

function AlarmCard({ enabled, time, rptDays, label }) {

    let rptMessage

    if (rptDays.length == 0) {
        rptMessage = "One-time"
    }
    else {
        rptMessage = "otherwise"
    }

  return (
    <div>
        { enabled ? "True" : "False" }
        <br/>
        { time }
        <br/>
        { rptMessage }
        <br/>
        { label }
        <br/>
    </div>
  )
}

export default AlarmCard