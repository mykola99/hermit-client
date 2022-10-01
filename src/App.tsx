import { Routes, Route } from "react-router-dom";

import "./App.scss";
import AuthCtx from "./context/authContext";
import useAuth from "./hooks/useAuth";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Header from "./components/Header";

function App() {
  const auth = useAuth();

  if (auth.loading) {
    return <div className="loading"></div>;
  }

  return (
    <>
      <AuthCtx.Provider value={auth.value}>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
          </Routes>
        </div>
      </AuthCtx.Provider>

      {/* The Toaster component displays messages on a popup  */}
      <div id="toaster-portal"></div>
    </>
  );
}

export default App;
