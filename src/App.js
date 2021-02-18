import { useEffect } from "react";

import { Footer, Nav } from "./components";
import { Route } from "react-router-dom";
import { fetchStuff } from "./redux/actions/stuff";
import { Home, Shop, ItemPage, Cart } from "./pages";
import { useDispatch, useSelector } from "react-redux";

import store from "./redux/store";
import "./App.sass";

function App() {
    const dispatch = useDispatch();
    const { category } = useSelector(({ filter }) => filter);

    useEffect(() => {
        dispatch(fetchStuff(category));
    }, [category, dispatch]);

    return (
        <div className='my-page'>
            <Nav />
            <Route exact path='/' component={Home} />
            <Route path='/shop/item/:id' component={ItemPage} />
            <Route exact path='/shop' component={Shop} />
            <Route exact path='/cart' component={Cart} />
            <Footer />
        </div>
    );
}

export default App;
