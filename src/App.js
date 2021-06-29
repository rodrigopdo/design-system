import GlobalStyles from './styles/globalStyles';
import TopNav from './components/TopNav';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Pages
import Home from './pages/Home';
import Colours from './pages/Colours';
import Typography from './pages/Typography';

function App() {
  return (
    <div>
      <GlobalStyles />
      <Router>
        <TopNav />
        <Sidebar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Colours' exact component={Colours} />
          <Route path='/Typography' exact component={Typography} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
