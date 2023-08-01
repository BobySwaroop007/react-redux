export const addToCart = (item) => {
    return {
        type: "add to cart",
        payload:item
    }
}

export const deleteCart = (id) => {
    return {
        type: "remove cart",
        payload:id
    }
}