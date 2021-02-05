const initialState = {
    items: [],
    isLoaded: false,
};

const stuff = (state = initialState, action) => {
    if (action.type === 'SET_STUFF') {
        return {
            ...state,
            items: action.payload,
        };
    }
    return state;
};

export default stuff;