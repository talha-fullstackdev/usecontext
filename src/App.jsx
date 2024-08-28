// import ComA from "./assets/ComA";
import UseReducer from "./assets/useReducer";
// import UseRef from "./assets/UseRef";
import UseEffect from "./assets/UseEffect";
// import UseMemo from "./assets/UseMemo";
import ComOne from "./assets/ComOne";
import AddTask from "./assets/AddTask";
import ShowTask from "./assets/ShowTask";
import { useState } from "react";
import UseEffects from "./assets/useEffect/UseEffects";
// import ShowCounter from "./components/ShowCounter";
const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "raect", completed: true },
    { id: 2, name: "raect", completed: true },
  ]);
  return (
    <div>
      {/* <ComA /> */}
      {/* <UseReducer/> */}
      {/* <UseRef/> */}
      {/* <UseEffect/> */}
      {/* <UseMemo/> */}
      {/* <ComOne/> */}
  
      <AddTask tasks={tasks} setTasks={setTasks} />
      <ShowTask tasks={tasks} setTasks={setTasks} />
      {/* <UseEffects/> */}
      {/* <ShowCounter/> */}
    </div>
  );
};
export default App;
