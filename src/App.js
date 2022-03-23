import { BrowserRouter as Router, Route } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';
import Container from './Container';
function App() {

  return (
    <Router>
      <QueryParamProvider ReactRouterRoute={Route}>
        <Container />

      </QueryParamProvider>
    </Router>
  );
}

export default App;
