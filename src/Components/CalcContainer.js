import React from 'react'
import { useState } from 'react';
import ButtonPanel from './ButtonPanel'
import CalcView from './CalcView'
import evaluate from '../calculate';


function CalcContainer() {

    const [currentArray, setcurrentArray] = useState(['0']);
    const [calcObject, setCalcObject] = useState({
        primaryValue: {
            value: ['0'],
            isSet: false
        },
        currentOperator: null,
        lastSelected: null
    });

    console.log(currentArray);
    console.log(calcObject);

    return (
        <div className = 'calcContainer'>
            <CalcView viewport = {currentArray} viewStyle = "mainView" />
            <CalcView viewport = {calcObject.currentOperator} viewStyle = "operatorView" />
            <hr style = {{width: "100%"}} />
            <ButtonPanel handleClick={(value) => {
                evaluate(currentArray, calcObject, value, setcurrentArray, setCalcObject)
            }}/>            
        </div>
    )
}

export default CalcContainer
