import React from 'react'

function AlarmCard({ enabled, time, rptDays, label }) { 

  return (
    <div>
        { enabled ? "True" : "False" }
        { time }
        { label }
    </div>
  )
}

export default AlarmCard