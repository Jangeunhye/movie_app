import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Details from "./routes/Details";
import Nav from "./components/Nav";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app_container}>
      <Router>
        <Nav />
        <Routes>
          <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
          <Route path="/movie/:id" element={<Details />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
