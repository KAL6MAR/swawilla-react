import React, { useState, useEffect } from "react";

import { Footer, Nav } from "./components";
import { Route, Link } from "react-router-dom";
import { fetchStuff } from "./redux/actions/stuff";
import { Home, Shop, ItemPage, Cart } from "./pages";
import { useDispatch, useSelector } from "react-redux";
import AnimatedMenu from "./components/AnimatedMenu";
import { push as Menu } from "react-burger-menu";
import "./App.sass";

const MyContext = React.createContext();

const MyProvider = (props) => {
    const [menuOpenState, setMenuOpenState] = useState(false);
    return (
        <MyContext.Provider
            value={{
                isMenuOpen: menuOpenState,
                toggleMenu: () => setMenuOpenState(!menuOpenState),
                stateChangeHandler: (newState) =>
                    setMenuOpenState(newState.isOpen),
            }}
        >
            {props.children}
        </MyContext.Provider>
    );
};

function App() {
    const dispatch = useDispatch();

    const { category } = useSelector(({ filter }) => filter);

    useEffect(() => {
        dispatch(fetchStuff(category));
    }, [category, dispatch]);

    return (
        <MyProvider>
            <div id='hui'>
                <AnimatedMenu context={MyContext} />
                <Nav context={MyContext} />
                <main id='big-hui'>
                    <Route exact path='/' component={Home} />
                    <Route path='/shop/item/:id' component={ItemPage} />
                    <Route exact path='/shop' component={Shop} />
                    <Route exact path='/cart' component={Cart} />
                    <Footer />
                </main>
            </div>
        </MyProvider>
    );
}

export default App;
