import GlobalStyles from './styles/globalStyles';
// import TopNav from './components/TopNav';
import Sidebar1 from './components/Sidebar1/Sidebar';
// import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Pages
import Home from './pages/home';
import Colours from './pages/tokens/colours';
import Typography from './pages/tokens/typography';

function App() {
  return (
    <div>
      <GlobalStyles />
      <Router>
        {/* <TopNav /> */}
        <Sidebar1 />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/colours' exact component={Colours} />
          <Route path='/typography' exact component={Typography} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
