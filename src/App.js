import { useEffect } from "react";

import { Footer, Nav } from "./components";
import { Route } from "react-router-dom";
import { fetchStuff } from "./redux/actions/stuff";
import { Home, Shop, ItemsPage } from "./pages";
import { useDispatch, useSelector } from "react-redux";

import "./App.sass";

function App() {
    const dispatch = useDispatch();
    const { category } = useSelector(({ filter }) => filter);

    useEffect(() => {
        dispatch(fetchStuff(category));
        console.log("обновились");
    }, [category, dispatch]);

    return (
        <div className='my-page'>
            <Nav />
            <Route exact path='/' component={Home} />
            <Route path='/shop/item/:id' component={ItemsPage} />
            <Route exact path='/shop' component={Shop} />
            <Footer />
        </div>
    );
}

export default App;
