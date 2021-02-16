const initialState = {
    sizeState: "",
};

const counter = (state = initialState, action) => {
    if (action.type === "SET_SIZE") {
        return {
            ...state,
            sizeState: action.payload,
        };
    }
    return state;
};

export default counter;
