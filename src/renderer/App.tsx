import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import MainScreen from './MainScreen/MainScreen';
import { Provider } from 'react-redux';
import { store } from '../store/store';

export default function App() {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<MainScreen />} />
          </Routes>
        </Router>
      </Provider>
    </ChakraProvider>
  );
}
