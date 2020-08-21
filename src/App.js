import React from 'react';

import Header from './components/Header/Header.jsx';
import SearchInput from './components/SearchInput';
import TodoList from './components/TodoList';
import TabsButtons from './components/TabsButtons';
import AddTask from './components/AddTask';
import TotalTask from './components/TotalTask';

import './App.css';

function App() {
  return (
    <section className="todo-app">
      <div className="App">
        <Header />
        <SearchInput />
        <TabsButtons />
        <TodoList />
        <AddTask />
        <TotalTask />
      </div>
    </section>
  );
}

export default App;
