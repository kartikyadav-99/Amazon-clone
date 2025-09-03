import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Checkout from "./components/checkout/Checkout";
import Login from "./components/login/Login";

import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user] = useAuthState(auth);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/checkout" element={ user ?
            <>
              <Header />
              <Checkout />
            </> : <Login/>
          } />
          <Route path="/login" element={ user ? <><Header/> <Home /></> : <Login/>
            } />
          <Route
            path="/"
            element={ user ?
              <>
                <Header />
                <Home />
              </> : <Login/>
            }
          />
          <Route path="*" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
