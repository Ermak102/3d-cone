import { Route, Routes } from "react-router-dom";
import { router } from "./router/router";

function App() {
  return (
    <div className="App">
      <Routes>
        {router.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
