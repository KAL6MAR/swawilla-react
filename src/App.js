import { useEffect } from 'react';

import { Section1, Section2, Section3, Section4, Shop, ItemsPage, Footer, Nav } from './components'
import { Route } from 'react-router-dom';
import axios from 'axios'
import { setStuff as setStuffAction } from './redux/actions/stuff'


import { useDispatch } from 'react-redux'


import './App.sass';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('http://localhost:3000/bd.json').then(({ data }) => {
      dispatch(setStuffAction(data.items));
    })
    // eslint-disable-next-line
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

      <Route path="/shop/item/:id" component={ItemsPage} />
      <Route exact path="/shop">
        <Shop />
      </Route>

      <Footer />
    </div >
  );
}


export default App;

// const mapStateToProps = (state) => {
//   return {
//     items: state.stuff.items,
//     filters: state.filters
//   }
// };


// const mapDispatchToProps = (dispatch) => {
//   return {
//     setStuff: (stuff) => dispatch(setStuffAction(stuff))
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);
