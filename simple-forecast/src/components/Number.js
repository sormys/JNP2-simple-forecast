import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { add, remove } from '../redux/reducers/counter'
import { switchTheme } from '../redux/reducers/theme'
import Button from './Button'

const Number = () => {
    const counter = useSelector(state => state.counter.value)
    const isEven = useSelector(state => state.even.isEven)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <Button onClick = {() => dispatch(add(1))}>Add</Button>
            <Button onClick = {() => dispatch(remove(1))}>Subtract</Button>
            <Button onClick = {() => dispatch(switchTheme())}>Change Theme</Button>
            <h2>Is Even = {isEven === true? 'true' : 'false'}</h2>
        </div>
    );
}

export default Number