import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/HomePage/HomePage";
import NavBar from "./pages/Shared/NavBar/NavBar";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes/Routes";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
