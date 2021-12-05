import React from 'react'

function CalcButton(props) {

    function buttonClick(){
        props.handleClick(props.buttonValue);
    }

    return (
        <>
            <input onClick = {buttonClick} className = 'calcButton' type = 'button' name = 'calcButton' value = {props.buttonValue} />
        </>
    )
}

export default CalcButton
