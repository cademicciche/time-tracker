import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { PersistGate } from 'redux-persist/integration/react';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import MainScreen from './MainScreen/MainScreen';
import { persistor, store } from '../store/store';

export default function App() {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Routes>
              <Route path="/" element={<MainScreen />} />
            </Routes>
          </Router>
        </PersistGate>
      </Provider>
    </ChakraProvider>
  );
}
