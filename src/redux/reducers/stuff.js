const initialState = {
    items: [],
    arrivals: [],
    isLoaded: false,
};

const stuff = (state = initialState, action) => {
    if (action.type === "SET_STUFF") {
        return {
            ...state,
            items: action.payload,
            isLoaded: true,
        };
    }
    if (action.type === "SET_ARRIVALS") {
        return {
            ...state,
            arrivals: action.payload,
        };
    }
    if (action.type === "SET_TRENDING") {
        return {
            ...state,
            trending: action.payload,
        };
    }
    return state;
};

export default stuff;
