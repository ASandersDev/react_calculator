import React from 'react'
import CalcButton from './CalcButton'

function ButtonPanel(props) {

    function getValue(value){
        props.handleClick(value);
    }


    return (
        <div className = 'buttonPanel'>
            <CalcButton handleClick = {getValue} buttonValue = '1' />
            <CalcButton handleClick = {getValue} buttonValue = '2' />
            <CalcButton handleClick = {getValue} buttonValue = '3' />
            <CalcButton handleClick = {getValue} buttonValue = '+' />

            <CalcButton handleClick = {getValue} buttonValue = '4' />
            <CalcButton handleClick = {getValue} buttonValue = '5' />
            <CalcButton handleClick = {getValue} buttonValue = '6' />
            <CalcButton handleClick = {getValue} buttonValue = '-' />

            <CalcButton handleClick = {getValue} buttonValue = '7' />
            <CalcButton handleClick = {getValue} buttonValue = '8' />
            <CalcButton handleClick = {getValue} buttonValue = '9' />
            <CalcButton handleClick = {getValue} buttonValue = '*' />

            <CalcButton handleClick = {getValue} buttonValue = 'C' />
            <CalcButton handleClick = {getValue} buttonValue = '0' />
            <CalcButton handleClick = {getValue} buttonValue = '.' />
            <CalcButton handleClick = {getValue} buttonValue = '/' />
            <CalcButton handleClick = {getValue} buttonValue = '=' />
        </div>
    )
}

export default ButtonPanel
