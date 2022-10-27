import React,{
    memo
} from 'react'



import TextFields from './textfields'
import SessionCondition from './SessionCondition'



function Form() {
  return (
    <form
      style={{
        marginTop:"50px",
        marginBottom:"25px"
      }}>
            <TextFields
              sx={{
                marginBottom:'18px'
              }}/>
            <SessionCondition/>
    </form>
  )
}

export default memo(Form)



