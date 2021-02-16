const initialState = {
    items: {},
    totalPrice: 135.01,
    totalCount: 0,
};

const cart = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_ITEM_CART": {
            const newItems = {
                ...state.items,
                [action.payload.id]: !state.items[action.payload.id]
                    ? [action.payload]
                    : [...state.items[action.payload.id], action.payload],
            };
            const arrItems = [].concat.apply([], Object.values(newItems));
            const totalPrice = arrItems.reduce(
                (sum, obj) => obj.price + sum,
                0
            );
            return {
                ...state,
                items: newItems,
                totalPrice: totalPrice,
                totalCount: arrItems.length,
            };
        }

        default:
            return state;
    }
};

export default cart;
