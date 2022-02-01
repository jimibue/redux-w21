import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Footer from './Footer';
import Memes from './Memes';

const App = () => ( 
  <div className="App">
    <Memes />
    <TodoForm />
    <TodoList />
    <Footer />
  </div>
);


export default App;
