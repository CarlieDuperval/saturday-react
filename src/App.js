import './App.css';
import TodoItem from './components/TodoItem';
import TodoItemList from './components/TodoItemList';

function App() {
  const itemsList = [
    {title:"Need Butter", isCompleted: true},
    {title:"Need Bread", isCompleted: false},
    {title:"Need Booze", isCompleted: false},
    {title:"Need Banana", isCompleted: false},
    {title:"Need Berries", isCompleted: false},

  ]

  return (
    <div className="App">
      <header className="App-header">
        <TodoItemList items={itemsList} />
        {/* <TodoItem title={itemsList[0].title} isCompleted={itemsList[0].isCompleted} />
        <TodoItem title={itemsList[1].title} isCompleted={itemsList[0].isCompleted} /> */}
      </header>
    </div>
  );
}

export default App;
