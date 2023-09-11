import { NAME } from "../actions/actionsTypes";

let Initialstate = {
    name:'',
};
const Reducers = (state = Initialstate, action ) => {
    console.log('Inside Recucer Fn');
    switch(action.type)
    { 
        
        case NAME : 
        return {
            ...state,
            name: action.value,
        }
        default:
            return state;
    }
    
}
export default Reducers;