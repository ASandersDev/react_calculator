import React from 'react'

function CalcButton(props) {
    return (
        <>
            <input className = 'calcButton' type = 'button' name = 'calcButton' value = {props.buttonValue} />
        </>
    )
}

export default CalcButton
