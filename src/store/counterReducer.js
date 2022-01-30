
//Reducer

const initialState ={
    count:1
}

const counter =(state=initialState,action)=>{
    switch(action.type){
      case "Inc": 
        return {
          ...state,
             count:state.count + action.payload
            }
      case "Dec": 
        return {
            ...state,
            count:state.count - action.payload
       
        }
      default : 
        return state;
    }
  };
  
export default counter