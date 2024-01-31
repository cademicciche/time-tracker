import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import MainScreen from './MainScreen/MainScreen';
import { Provider } from 'react-redux';
import { persistor, store } from '../store/store';
import { PersistGate } from 'redux-persist/integration/react';

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
