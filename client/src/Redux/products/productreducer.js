import * as types from "./actionType"

const inistate = {
    postproduct : null,
    loading:false,
    error:"",
    getProduct:null


}

const Productreducer=(state=inistate, {type,payload})=>{
      switch(type){
        case types.FETCH_DATA_REQUEST:{
            return {
                ...state,
                loading:true
            }
        }
       case types.FETCH_DATA_SUCCESS:{
            return{
          ...state,
          loading:false,
          getProduct:payload
            }
        }
        case types.FETCH_DATA_FAILURE:{
            return{
          ...state,
          loading:false,
          error:payload
            }
        }
        default:
            return state
      }
   
      
}










export default Productreducer