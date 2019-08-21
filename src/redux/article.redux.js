import axios from 'axios'

const PUBLISH_SUCCESS = 'PUBLISH_SUCCESS'

const initState = {
  title:'',
  date:'',
  content:'',
  tag:[]
}

export function article(state=initState, action){
  switch(action.type){
    case PUBLISH_SUCCESS:
      return {...action} 
    
    default:
      return state; 
  }
}


// action creater
function publishSuccess(data){
  return {type: PUBLISH_SUCCESS,  payload: data}
}

export function getArticles(){

}


export function publish({tag, title, content, outputHTML}){
  console.log(tag, title, content, outputHTML)
  // 生成发布文章的时间
  
  let date = getDate()

  return dispatch=>{
    axios.post('/article/publish/', {tag, title, content, outputHTML, date})
      .then(res=>{
        console.log(res)
        dispatch(publishSuccess(res.data.data))
      })
  }
}


function getDate(){
  let timestamp , year, month, day, hour, second, minute;
  timestamp = new Date();
  year = timestamp.getFullYear();

  month = timestamp.getMonth()+1;
  month = month<10 ? '0'+month : month;

  day = timestamp.getDate()+1;
  day = day<10 ? '0'+day : day;

  hour = timestamp.getHours();
  hour = hour<10 ? '0'+hour : hour;

  minute = timestamp.getMinutes();
  minute = minute<10 ? '0'+minute : minute;

  second = timestamp.getSeconds()
  second = second<10 ? '0'+second : second;

  return year +'/' + month + '/' + day + ' ' + hour + ':' + minute + ':' + second;

}