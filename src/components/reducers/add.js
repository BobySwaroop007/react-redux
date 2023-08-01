const init = {
    carts: []
};
const itemAdded = (state =init, action) =>{
    switch(action.type) {
        case "add to cart" : 
        const itemIndex = state.carts.findIndex((item)=> item.id === action.payload.id);
        if(itemIndex >= 0){
            state.carts[itemIndex].quantity +=1
        }
        else{
            const temp = {...action.payload,quantity:1}
            return {
                ...state,
                carts: [...state.carts, temp]
            }
        }
        
        case "remove cart" :
        const data = state.carts.filter((el)=>el.id !== action.payload)
        return {
            ...state,
            carts:data
        }
        case "Remove item":
        const itemIndex_dec = state.carts.findIndex((item)=> item.id === action.payload.id);
        if(state.carts[itemIndex_dec].quantity >= 1){
            const dltitem = state.carts[itemIndex_dec].quantity -= 1
            console.log([...state.carts, dltitem]);
            return {
                ...state, 
                carts:[...state.carts]
            }
        }
        else if(state.carts[itemIndex_dec].quantity ===1){
            const data = state.carts.filter((el)=>el.id !== action.payload)
        return {
            ...state,
            carts:data
        }

        }

        default: return state;
    }
}

export default itemAdded;