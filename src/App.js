import React, { useState } from 'react';
import './App.css';
import CourseGoalList from './components/courseGoals/courseGoalList/CourseGoalList';
import CourseInput from './components/courseGoals/courseInput/CourseInput';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { id: 'g1', text: 'Finish responsiveness feature on profile page.' },
    { id: 'g2', text: 'Finish building UI with react project.' },
    { id: 'g3', text: 'Take the exam for the digital marketing certification.' }
  ])

  const addGoalHandler = enteredText => {
    setCourseGoals(prevGoals => {
      const updatedGoals = [...prevGoals]
      updatedGoals.unshift({ id: Math.random().toString(), text: enteredText })
      return updatedGoals
    })
  }

  const deleteItemHandler = goalId => {
    setCourseGoals(prevGoals => {
      // const updatedGoals = prevGoals.filter(goal => goal.id !== goalId)
      // return updatedGoals

      return prevGoals.filter(goal => goal.id !== goalId)
    })
  }

  let content = (
    <p className='no-data'>No goals set so far. Try to add one now!</p>
  )

  if (courseGoals.length > 0){
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    )
  }

  return (
    <div >
     <section id='goal-form'>
       <CourseInput onAddGoal={addGoalHandler} />
     </section>
     
     <section id='goals'>
        {content}
        {/*
          {courseGoals.length > 0 && (
            <CourseGoalList
              items={courseGoals}
              onDeleteItem={deleteItemHandler}
            />
          ) // <p style={{ textAlign: 'center' }}> No goals found. </p>
        }        
        */}
     </section>
    </div>
  );
}

export default App;
