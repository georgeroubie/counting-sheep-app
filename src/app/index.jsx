import AppWrapper from './components/layout/AppWrapper';
import Routing from './routing/Routing';
import { AppProvider } from './state/Context';
import Theme from './theme/Theme';

const App = () => {
  return (
    <AppProvider>
      <Theme>
        <AppWrapper>
          <Routing />
        </AppWrapper>
      </Theme>
    </AppProvider>
  );
};

export default App;
