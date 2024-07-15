export const initialState = {
    basket: [],
    userLogin : false
}

// Selector

export const getBasketsTotal = (basket) => {
   return basket?.reduce((total,cur)=>{
           return total+=cur.price
    },0)
}

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
        case "USER_LOGIN":
            return {
                ...state,
                userLogin : action.item
            }
        default:
            return state
    }
}
