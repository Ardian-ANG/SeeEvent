const initialState = {
   eventList : [],
   searchEvent:[]
}

const eventReducer = (state = initialState, action) =>{
   switch (action.type){
      case "SET_EVENT":{
         return{
            ...state,
            eventList : action.payload,
         };
      }
      case "SEARCH_EVENT":{
         return{
            ...state,
            searchEvent: action.payload,
         }
      }
      default:{
         return{
            ...state,
         }
      }
   }
}

export default eventReducer;