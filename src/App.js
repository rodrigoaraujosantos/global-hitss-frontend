import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import Lists from './components/pages/Lists';
import NewList from './components/pages/NewList';
import Itens from './components/pages/Itens';
import NewItem from './components/pages/NewItem'
import Item from './components/pages/Item';

import Container from './components/layout/Container';
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'
import List from './components/pages/List';


function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Container customClass="min-height">
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/newlist">
            <NewList />
          </Route>

          <Route path="/lists">
            <Lists />
          </Route>

          <Route path="/list/:id">
            <List />
          </Route>

          <Route path="/item/:id">
            <Item />
          </Route>

          <Route path="/newitem">
            <NewItem />
          </Route>

          <Route path="/itens">
            <Itens />
          </Route>

          <Route path="/company">
            <Company />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          
        </Container>

      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
