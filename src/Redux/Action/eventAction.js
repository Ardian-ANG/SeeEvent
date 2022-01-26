import axios from 'axios';

export const getEvent = ()=>{
   return async (dispatch)=>{
      try{
         const result = await axios ('https://team-b-see-event.herokuapp.com/api/v1/event')
         console.log(result.data.result);
         dispatch({
            type:"SET_EVENT",
            payload: result.data.result})
      }catch(err){
         console.log(err)
      }
   }
} 

// export const searchEvent = ()=>{
//    return async (dispatch)=>{
//       try{
//          const result = await 
//       }
//    }
// }