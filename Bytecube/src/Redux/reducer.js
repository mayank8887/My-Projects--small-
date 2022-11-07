import { ADD_BLANACE, ADD_INCOME } from "./actiontypes";

const store = [
    isLoading= false,
    
]

 
 const blanceReducer =(state,action)=>{
        switch (action.type) {
            case 'ADD_INCOME':
                return(
                    ...state,
                    state:action.payload;

                )
        
          case 'ADD_BLANACE':
          return (
            ...state,
            state:state+action.payload;

          )
    
        default:
            state;
}
}