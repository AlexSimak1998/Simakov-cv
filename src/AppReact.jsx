import React from 'react'
import cl from "./AppReact.module.css"
import LeftSide from './components/sideLeft/LeftSide'
import RightSide from './components/sideRight/RightSide'

function x (arr){
  var sum = 0
  for(var i = 0 ; arr.length > i ;i++ ){
    sum += arr[i]
  }
  return sum
}
console.log(x([5,5,7]));
export default function AppReact() {
  return (
    <div className={cl.AppReact}>
      <LeftSide />
      <RightSide />
    </div>
  )
}
