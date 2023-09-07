import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../features/showSlice'
import { incrementByValue } from '../features/showSlice'

function SubChild1() {

    const dispatch = useDispatch()

    const data = useSelector((c)=>{
    return c.showStore.value
    })

    return (
        <div>
        <h1>Subchild1 {data} </h1>
        <button onClick={()=>dispatch(increment())}> Click Me</button>
        <button onClick={()=>dispatch(incrementByValue(10))}> Increase by Value</button>
        </div>
    )
}

export default SubChild1