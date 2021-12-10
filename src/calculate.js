const operators = ['+', '-', '*', '/', 'C', '='];


function evaluate(currentArray, calcObject, value, setcurrentArray, setCalcObject){
    
//If value was an operator
    if(operators.includes(value)){
        
        //If the clear operation is selected
            if(value === 'C'){
                setcurrentArray(['0']);

                setCalcObject({
                    primaryValue: {
                        value: ['0'],
                        isSet: false
                    },
                    currentOperator: null,
                    lastSelected: null
                });

                return;
            }

             else if(value === '='){
                if(calcObject.primaryValue.isSet){
                        let calcResult = calculate(calcObject.primaryValue.value, currentArray, calcObject.currentOperator);

                    setcurrentArray([calcResult]);

                    setCalcObject({
                        ...calcObject,
                        lastSelected: value,
                        primaryValue: {
                            ...calcObject.primaryValue,
                            value: calcResult
                        }
                    });
                }

                return;
            } 

        //If the primary value has already been set
            if(calcObject.primaryValue.isSet){
                //If the last selected value was already an operator, just replace it
                if(operators.includes(calcObject.lastSelected)){

                    setCalcObject({
                        ...calcObject,
                        primaryValue:{
                            ...calcObject.primaryValue
                        },
                        currentOperator: value,
                        lastSelected: value
                    });

                    return;
                }

                //If the last value wasn't an operator, calculate the results and add new values via temporary resultObject 
                let calcResult = calculate(calcObject.primaryValue.value, currentArray, calcObject.currentOperator);

                setcurrentArray([calcResult]);
                setCalcObject({
                    primaryValue:{
                        value: calcResult,
                        isSet: true
                    },
                    currentOperator: value,
                    lastSelected: value
                });

                return;
            }

        //If primary value isn't set, update the values via temporary resultObject
            else{

                setcurrentArray([currentArray.join("")]);
                setCalcObject({
                    primaryValue:{
                        value: currentArray.join(""),
                        isSet: true
                    },
                    currentOperator: value,
                    lastSelected: value
                });

                return;
            }
    }

//If value was a number
    else{
        //If starting at zero or last value was operator, replace zero with input value. This is start of the secondary number
        if((currentArray.length === 1 && currentArray[0] === '0') || operators.includes(calcObject.lastSelected)){

            setcurrentArray([value]);

            setCalcObject({
                ...calcObject,
                lastSelected: value,
                primaryValue: {
                    ...calcObject.primaryValue
                }
            });

            return;
        }

        //If number input has already been started, simply concatenate with new value
        else{

            setcurrentArray([...currentArray, value]);

            setCalcObject({
                ...calcObject,
                lastSelected: value,
                primaryValue: {
                    ...calcObject.primaryValue
                }
            });

            return;
        }

    };

}


function calculate(num1, numArray, operator){
    let num2 = numArray.join("");
    let expression = num1 + operator + num2;

    let result = eval(expression);
        result = result.toString(); 

    return result; 
}
 

export default evaluate