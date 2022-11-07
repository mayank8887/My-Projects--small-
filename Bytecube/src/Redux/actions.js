
import * as types from "./actionTypes";

const addIncomerequest = ()=>{
    return {type: types.ADD_INCOME_REQUEST}
}


const addIncomesuccess = (payload)=>{
    return {type: types.ADD_INCOME_SUCCESS,payload}
}

const addIncomefailure = ()=>{
    return {type: types.ADD_INCOME_FAILURE}
}

const addBalancerequest = () =>{
    return {type:types.ADD_BALANCE_REQUEST}

}

const addBalancesuccess = (payload)=>{
    return {type: types.ADD_BALANCE_SUCCESS,payload}
}

const addBalancefailure = () =>{
    return {type: types.ADD_BALANCE_FAILURE}
}
export {addIncomerequest,addIncomesuccess,addIncomefailure,addBalancerequest,addBalancesuccess,addBalancefailure}