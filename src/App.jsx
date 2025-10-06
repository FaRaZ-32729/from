import React from 'react'
import JobForm from './components/JobForm'
import JobApplication from './components/JobApplication'
import Form from './components/Form'
import Forms from './components/Forms'
import FormsInSteps from './components/FormsInSteps'
import SubmissionSummary from './components/SubmitionSummary'
import { Route, Router, Routes } from 'react-router'

const App = () => {
  return (
    <>
      {/* <JobForm /> */}
      {/* <JobApplication /> */}
      {/* <Form /> */}
      {/* <Forms /> */}
      {/* <FormsInSteps /> */}

      <Routes>
        <Route path='/' element={<FormsInSteps />} />
        <Route path='/submitted' element={<SubmissionSummary />} />
      </Routes>
    </>
  )
}

export default App