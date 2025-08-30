import { useState } from 'react';
import { evaluate } from 'mathjs';
import './Calculator.css'


function Calculator (){

// this clickHandler function below for (all numbers , Addition button , Subtraction button , Multiplication button , Division button and dot button)

    let [result , setResult] = useState ('')

    let [includeDot , setIncludeDot] = useState(false)

    let operators = ['+' , '-' , '*' , '/']

// here make this function below for check division sign and Multiplication sign , to become a correct sign in operation
    const checkInput = (text) => {
        if(text === '÷') return '/'
        if(text === '×') return '*'
        return text
    }

// clickHandler
    const clickHandler = (event) => {

        let input = checkInput(event.target.innerText)

        // the condition below for prevent not to repeat . in screen for first number just repeat once after the operation sign we can use again a (dot)

        if(input === '.'){
            if(includeDot === true) return
            else setIncludeDot (true)
        } 

        if(operators.includes(input)){
            setIncludeDot(false)
        }

        setResult(result + input)
        
    }

    // clearBtn
    const clearBtn = () => {

        setResult('')

        setIncludeDot(false)
    }

    // backSpaceBtn
    const backSpaceBtn = () => {

        if(result.endsWith('.'))
            setIncludeDot(false)

        // here we used slice method for delete last number in the screen
        setResult(result.slice(0 , -1))
    }

    // equalBtn

    
    // warning : better not to use eval method because have Security problem and also we can use   evaluate method in mathJS.
    const equalBtn = () => {
        // here we used string and eval for equal button, first of all result that type was string become number type and after that we used string method that again type of result become string.
        // first way to make equalBtn:

        // setResult(String(eval(result)))

        // second way to make equalBtn with mathJS:

        setResult(String(evaluate(result)))

        setIncludeDot(false)
    }

    return(
        <div className="container">
            <div className="screen">{result}</div>

            {/* define color className for Operators buttons that can change their background */}
            <div className="buttons">
                <button onClick={clearBtn} className='color twoCol'>Clear</button>
                <button onClick={backSpaceBtn} className='color'>C</button>
                <button onClick={clickHandler} className='color'>÷</button>
                <button onClick={clickHandler}>7</button>
                <button onClick={clickHandler}>8</button>
                <button onClick={clickHandler}>9</button>
                <button onClick={clickHandler} className='color'>×</button>
                <button onClick={clickHandler}>4</button>
                <button onClick={clickHandler}>5</button>
                <button onClick={clickHandler}>6</button>
                <button onClick={clickHandler} className='color'>-</button>
                <button onClick={clickHandler}>1</button>
                <button onClick={clickHandler}>2</button>
                <button onClick={clickHandler}>3</button>
                <button onClick={clickHandler} className='color'>+</button>
                <button onClick={clickHandler}>0</button>
                <button onClick={clickHandler}>.</button>
                <button onClick={equalBtn} className='color twoCol'>=</button>
            </div>
        </div>
    )
}

export default Calculator