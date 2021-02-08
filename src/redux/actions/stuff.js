import axios from 'axios'



export const fetchStuff = (category) => (dispatch) => {
    console.log(category, "ДАННЫЕ ПОУЛЧЕНЫ");
    axios.get(`http://localhost:3001/items?${category === "ВСЁ" ? '' : `type=${category}`}`).then(({ data }) => {
        dispatch(setStuff(data));
    })
}



export const setStuff = (items) => ({
    type: 'SET_STUFF',
    payload: items,
});
