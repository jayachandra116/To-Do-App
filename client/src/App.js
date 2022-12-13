function App() {
  let toDos = ["Learn React", "Learn NodeJS", "Learn Express", "Learn MongoDB"];

  return (
    <div>
      <h1>To-Do App</h1>
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo}>{toDo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
