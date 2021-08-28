import React, {useState} from 'react'
// import styled from 'styled-components'
import Button from '../../ui/Button'
import styles from './courseInput.module.css'
// import './courseInput.css'

/* it's all about using styled-components */
// const FormControl = styled.div
// `
//     margin: 0.5rem 0;

//     & label {
//         font-weight: bold;
//         display: block;
//         margin-bottom: 0.5rem;
//         color: ${props => props.invalid ? 'red' : '#000'}
//     }

//     & input {
//         display: block;
//         width: 100%;
//         height: 30px;
//         border: 1px solid ${props => props.invalid ? 'red' : '#ccc'};
//         background: ${props => props.invalid ? '#ffd7d7' : 'transparent'}
//         font: inherit;
//         line-height: 1.5rem;
//         padding: 0 0.25rem;
//     }

//     & input:focus {
//         outline: none;
//         background: #fad0ec;
//         border-color: #8b005d;
//     }
// `

/* omit them from the formControl component */
// &.invalid input {
//     border-color: red;
//     background: #ffd7d7;
// }

// &.invalid label {
//     color: red;
// }

const CourseInput = (props) => {
    const [enteredValue, setEnteredValue] = useState('')
    const [isValid, setIsValid] = useState(true)

    const goalInputChangeHandler = event => {
        if (event.target.value.trim().length > 0){
            setIsValid(true)
        }
        setEnteredValue(event.target.value)
    }

    const formSubmitHandler = (event) => {
        event.preventDefault()
        if (enteredValue.trim().length === 0){
            setIsValid(false)
            return
        }
        props.onAddGoal(enteredValue)
        setEnteredValue('')
    }

    return (
        <form onSubmit={formSubmitHandler}>
            {/* 
            this is absolutely valid and possible to use. However, another
            alternative can be used here like as indicated in the styled 
            component itself.

            <FormControl className={!isValid && 'invalid'}> 
            */}
            
            {/* 
                // using the styled-component
                <FormControl invalid={!isValid}>
                <label>Course Goal</label>
                <input type='text' value={enteredValue} onChange={goalInputChangeHandler} />
                </FormControl> 
            */}

            <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
                <label>Course Goal</label>
                <input type='text' value={enteredValue} onChange={goalInputChangeHandler} />
            </div>
            <Button type='submit'>Add Goal</Button>
        </form>
    )
}

export default CourseInput
