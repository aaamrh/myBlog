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


export function publish({type, title, content}){
  console.log(type, title, content)
  // 生成发布文章的时间
  let timestamp , year, month, day, hour, second, minute, date;
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

  date = year +'/' + month + '/' + day + ' ' + hour + ':' + minute + ':' + second;


  return dispatch=>{
    axios.post('/article/publish/', {type, title, content, date})
      .then(res=>{console.log(res)})
  }
}