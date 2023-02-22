import React, { useEffect, useState } from 'react'
import './index.css'

export default function Timer() {
  const [curTime, setCurTime] = useState(0);

  useEffect(() => {
    console.log("useEffect")
    const startTimer=setInterval(() => {
      setCurTime(prev=>{
        console.log(prev)
       return prev+1
      });
    }, 1000)
    return()=> {
      console.log('came unmount')
      clearInterval(startTimer);
    } 
  }, [])
  return (
    <div className="timer-page">
      <p className="timer-heading">
        Timer
      </p>
      <p className="timer-value">
        {curTime}
      </p>
    </div>
  )
}
