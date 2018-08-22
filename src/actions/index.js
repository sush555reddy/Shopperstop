export const ADD_GROCERY ="ADD_GROCERY";
export const REM_GROCERY ="REM_GROCERY";

export function addGroceryById(id){
    const action = {
        type:ADD_GROCERY,
        id
    };
    return action;
}
export function removeGroceryById(id){
    const action = {
        type:REM_GROCERY,
        id
    };
    return action;
}