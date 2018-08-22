import { ADD_GROCERY,REM_GROCERY } from '../actions';
import groceryItemsList from '../data/groceryitems.json';
import {addToBag} from './helper';


function grocery(state = groceryItemsList, action) {
  switch (action.type) {
    case ADD_GROCERY:
    console.log(state,action);
    let grocery = state.filter(item =>item.id !== action.id);
      return grocery;
      break;
      case REM_GROCERY:
      console.log(state,action);
       grocery = [...state, addToBag(action.id)];
        return grocery;
        break;
    default:
      return state;
  }
}
export default grocery;