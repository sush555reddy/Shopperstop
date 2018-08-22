
import grocery from './grocery_reducer';
import shoppingBag from './ShoppinBag_reducer';

import {combineReducers} from 'redux';
const rootReducer = combineReducers({
grocery,
shoppingBag
});

export default rootReducer;