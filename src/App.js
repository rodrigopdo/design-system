import GlobalStyles from './styles/globalStyles';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Pages
import about from './views/introduction/about';
import howToUse from './views/introduction/howToUse';
import Colours from './views/tokens/colours';
import Typography from './views/tokens/typography';

function App() {
  return (
    <div>
      <GlobalStyles />
      <Router>
        <Sidebar />
        <Switch>
          <Route path='/views/introduction/about' exact component={about} />
          <Route path='/views/introduction/howToUse' exact component={howToUse} />
          <Route path='/views/tokens/colours' exact component={Colours} />
          <Route path='/views/tokens/typography' exact component={Typography} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
