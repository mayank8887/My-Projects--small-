import * as types from "./actionTypes"

const initialState = {
  amount: 0,
  balance:0,
  isLoading: false,
  isError: false,
};

const reducer = (oldState = initialState,action) => {

  const {type,payload} = action;

  switch(type){
    case types.ADD_INCOME_REQUEST:
      return{
       ...oldState,
        isLoading:true,
        isError:false,
      }
    
    case types.ADD_INCOME_SUCCESS:
      return{
        ...oldState,
        amount:oldState.amount+payload,
        isLoading:false,
        isError:false,
      }

    case types.ADD_INCOME_FAILURE:
      return{
        ...oldState,
        isLoading:false,
        isError:true,
      }

      case types.ADD_BALANCE_REQUEST:
        return{
         ...oldState,
          isLoading:true,
          isError:false,
        }
      
      case types.ADD_BALANCE_SUCCESS:
        return{
          ...oldState,
          balance:oldState.balance+payload,
          isLoading:false,
          isError:false,
        }
  
      case types.ADD_BALANCE_FAILURE:
        return{
          ...oldState,
          isLoading:false,
          isError:true,
        }
  }
  return oldState;
};

export { reducer };
