import axios from "axios";

export const setLoaded = (payload) => ({
    type: "SET_LOADED",
    payload,
});

export const fetchStuff = (category) => (dispatch) => {
    dispatch({
        type: "SET_LOADED",
        payload: false,
    });
    axios.get(`/items`).then(({ data }) => {
        dispatch(setStuff(data));
    });
    axios
        .get(`/arrivals?${category === "ALL" ? "" : `type=${category}`}`)
        .then(({ data }) => {
            dispatch(setArrivals(data));
        });
    axios.get(`/trending`).then(({ data }) => {
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
