import GlobalStyles from './styles/globalStyles';
import Sidebar from './components/Sidebar';
import { Row } from './utilities/grid';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Pages
import about from './pages/introduction/about';
import howToUse from './pages/introduction/howToUse';
import colours from './pages/tokens/colours';
import typography from './pages/tokens/typography';

function App() {
  return (
    <div>
      <GlobalStyles />
        <Router>
          <Row>
            <Sidebar />
            <Switch>
              <Route path='/introduction/about' exact component={about} />
              <Route path='/introduction/howToUse' exact component={howToUse} />
              <Route path='/tokens/colours' exact component={colours} />
              <Route path='/tokens/typography' exact component={typography} />
            </Switch>
          </Row>
        </Router>
    </div>
  );
}

export default App;
