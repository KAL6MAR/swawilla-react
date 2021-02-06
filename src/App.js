import { useEffect, useState } from 'react';

import { Section1, Section2, Section3, Section4, Shop, ItemsPage, Footer, Nav } from './components'
import { Route } from 'react-router-dom';
import axios from 'axios'
import { setStuff as setStuffAction } from './redux/actions/stuff'

import { connect } from 'react-redux'


import './App.sass';
import store from './redux/store';


function App(props) {
  console.log(props.items)
  const [item, setItem] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/bd.json').then(({ data }) => {
      store.dispatch(setStuffAction(data.items))
    })
  }, [])

  return (
    <div className="my-page">
      <Nav />
      <Route exact path="/">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </Route>

      <Route path="/item/:id">
        <ItemsPage />
      </Route>

      <Route exact path="/shop">
        <Shop items={props.items} />
      </Route>

      <Footer />
    </div >
  );
}

const mapStateToProps = (state) => {
  return {
    items: state.stuff.items
  }
};


const mapDispatchToProps = dispatch => {
  return {
    setStuff: (stuff) => dispatch(setStuffAction(stuff))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
