
import groceryItemsList from '../data/groceryitems.json';

export function addToBag(id){
    let item = groceryItemsList.find((item)=> item.id === id);
    return item;
}