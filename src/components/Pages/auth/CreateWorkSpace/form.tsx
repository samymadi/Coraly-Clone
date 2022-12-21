import React from 'react'


import Textfields from './textfields'
import Checkboxs from './checkboxs'



function Form() {
  return (
    <form
     style={{
        marginTop:"50px",
        marginBottom:"25px"
      }}>
        <Textfields/>
        <Checkboxs/>

    </form>
  )
}

export default Form