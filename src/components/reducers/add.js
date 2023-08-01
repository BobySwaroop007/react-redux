const init = {
    carts: []
};
const itemAdded = (state =init, action) =>{
    switch(action.type) {
        case "add to cart" : 
        return {
            carts:[...state.carts, action.payload]
        }
        case "remove cart" :
        const data = state.carts.filter((el)=>el.id !== action.payload)
        return {
            ...state,
            carts:data
        }
        default: return state;
    }
}

export default itemAdded;