import axios from "axios";

export const fetchStuff = (category) => (dispatch) => {
    axios.get(`http://localhost:3001/items`).then(({ data }) => {
        dispatch(setStuff(data));
    });
    axios
        .get(
            `http://localhost:3001/arrivals?${
                category === "ALL" ? "" : `type=${category}`
            }`
        )
        .then(({ data }) => {
            dispatch(setArrivals(data));
        });
    axios.get(`http://localhost:3001/trending`).then(({ data }) => {
        dispatch(setTrending(data));
    });
};

export const setStuff = (items) => ({
    type: "SET_STUFF",
    payload: items,
});
export const setArrivals = (arrivals) => ({
    type: "SET_ARRIVALS",
    payload: arrivals,
});
export const setTrending = (trending) => ({
    type: "SET_TRENDING",
    payload: trending,
});
