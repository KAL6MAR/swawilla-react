export const counterIncrement = (increment) => ({
    type: "INCREMENT",
    payload: increment,
});
export const counterDecrement = (decrement) => ({
    type: "DECREMENT",
    payload: decrement,
});
