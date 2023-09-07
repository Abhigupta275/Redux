import React from 'react'
import SubChild1 from './SubChild1'

function Child1(props) {
  return (
    <div><h1>Child1</h1>
        <SubChild1 subVal= {props.value} />
    </div>
  )
}

export default Child1