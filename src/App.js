import "./App.css";
import { Login, Signup } from "./Pages";
import { Routers } from "./Routers/Routers";

function App() {
  return (
    <>
      <div className="main-continer">
        <Routers />
        {/* <Login/> */}
      </div>
    </>
  );
}

export default App;
