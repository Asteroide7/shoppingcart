export const initialState = {
    basket: []
}

export const actionTypes = {
    ADD_TO_BASKET: 'ADD_TO_BASKET'
}

const reducer = (state, action) => {
    console.log(action);
    switch (action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
            // 2:28:18
            default: return state;
        }
}

export default reducer