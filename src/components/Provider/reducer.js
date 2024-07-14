export const initialState = {
    basket: [],
}

// Selector

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case "REMOVE_BASKET":
            return {
                ...state,
                basket: state.basket.filter((item)=>item.id !== action.item)
            }
        default:
            return state
    }
}
