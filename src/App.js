import { Container } from '@mui/material';
import { Route, Switch } from 'react-router';
import './App.css';
import Header from './Componenets/Header/Header';
import SimpleBottomNavigation from './Componenets/MainNav';
import Movies from './Pages/Movies/Movies';
import Search from './Pages/Search/Search';
import Series from './Pages/Series/Series';
import Trending from './Pages/Trending/Trending';

function App() {
  return (
    <>
     <Header/>
    <div className="app">
      <Container>
        <Switch>
        <Route path="/" component={Trending} exact />
            <Route path="/movies" component={Movies} />
            <Route path="/series" component={Series} />
            <Route path="/search" component={Search} />
        </Switch>
      </Container>
    </div>
   <SimpleBottomNavigation/>
    </>
  );
}

export default App;
