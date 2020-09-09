import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux';
import store from './store';

//reactstrap
import { Container } from 'reactstrap';

//components
import NavBar from './components/navbar';
import ToDoList from './components/ToDoList';
import ListModal from './components/listModal';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <NavBar />
        <Container>
          <ListModal />
          <ToDoList />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
