import { useEffect } from 'react';

import { Section1, Section2, Section3, Section4, Shop, ItemsPage, Footer, Nav } from './components'
import { Route } from 'react-router-dom';
import { fetchStuff } from './redux/actions/stuff'

import { useDispatch, useSelector } from 'react-redux'

import './App.sass';

function App() {

  const dispatch = useDispatch();
  const { category } = useSelector(({ filter }) => filter);

  useEffect(() => {
    dispatch(fetchStuff(category));
    console.log("обновились")
  }, [category])

  return (
    <div className="my-page">
      <Nav />
      <Route exact path="/">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </Route>

      <Route path="/shop/item/:id" component={ItemsPage} />
      <Route exact path="/shop">
        <Shop />
      </Route>

      <Footer />
    </div >
  );
}


export default App;

