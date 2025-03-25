import TodoListItem from './TodoListItem';

function TodoList() {
  const todos = [
    { id: 1, title: 'review resources' },
    { id: 2, title: 'take notes' },
    { id: 3, title: 'code out app' },
  ];

  return (
    <>
      <TodoListItem todos={todos} />
    </>
  );
}
export default TodoList;
