import axios from 'axios'

const PUBLISH_SUCCESS = 'PUBLISH_SUCCESS'

const initState = {
  msg:''
}

export function article(state=initState, action){
  switch(action.type){
    case PUBLISH_SUCCESS:
      return {...action} 
    
    default:
      return state; 
  }
}


export function publish({type, title,  date, breaf_content, content}){
  console.log(type, title,  date, breaf_content, content)

  return dispatch=>{
    axios.post('', {})
      .then(res=>{console.log(res)})
  }
}