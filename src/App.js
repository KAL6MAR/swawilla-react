
import './App.sass';

// import Mmenu from './components/Mmenu';
import Nav from './components/Nav';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3'
import Section4 from './components/Section4';
import Footer from './components/Footer';
import ItemsPage from './components/ItemsPage';
import { Route } from 'react-router-dom';
import Shop from './components/Shop';
import { useEffect, useState } from 'react';

function App() {
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/bd.json')
      .then((resp) => resp.json())
      .then((json) => {
        setItem(json.items);

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
        <Shop items={item} />
      </Route>
      <Footer />
    </div >
  );
}

export default App;
