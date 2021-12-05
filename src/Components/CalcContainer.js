import React from 'react'
import { useState } from 'react';
import ButtonPanel from './ButtonPanel'
import CalcView from './CalcView'

function CalcContainer() {

    const [selectedValue, setSelectedValue] = useState([])

    console.log(selectedValue);

    function getValue(value){
        if(value === 'C'){
            setSelectedValue([]);
        }else{
        setSelectedValue([...selectedValue, value]);
        }
    }

    return (
        <div className = 'calcContainer'>
            <CalcView viewport = {selectedValue} />
            <hr style = {{width: "100%"}} />
            <ButtonPanel handleClick={getValue}/>            
        </div>
    )
}

export default CalcContainer
