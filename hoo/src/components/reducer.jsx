import React from 'react'

const reducer=(state,action)=>{
    if(action.type==="INC")
    return (state=state+1)
    
    if(action.type==="DEC"){
    let newNum=0;
    if(state>0)
    newNum=state-1
    else
    newNum=0
        return newNum
    
    }
}

export default reducer
