import { ADD_GROCERY ,REM_GROCERY} from '../actions';
import {addToBag} from './helper';

function ShoppingBag(state = [], action) {
  switch (action.type) {
    case ADD_GROCERY:
    console.log(state,action);
    let ShoppingBag = [...state, addToBag(action.id)];
      return ShoppingBag;
      break;
      case REM_GROCERY:
      ShoppingBag = state.filter(item =>item.id !== action.id);
    default:
      return state;
  }
}

export default ShoppingBag;