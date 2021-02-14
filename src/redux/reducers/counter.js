const initialState = {
    value: 0,
};

const counter = (state = initialState, action) => {
    if (action.type === "INCREMENT") {
        state.value += 1;
    }
    if (action.type === "DECREMENT") {
        state.value = Math.max(state.value - 1, 0);
    }
    return state;
};

export default counter;
