import { Box } from '@chakra-ui/layout';
import { Home } from './pages/Home';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Box height="100%" minHeight="100vh" bgColor="#3c3f51">
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Box>
  );
}

export default App;
