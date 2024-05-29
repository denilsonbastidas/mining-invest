import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import Quantify from "./routes/Quantify";
import Team from "./routes/Team";
import Profile from "./routes/Profile";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import useAuth from "./hooks/useAuth";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const isAuthenticated = useAuth();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Routes>
      <Route path="/" element={isAuthenticated ? <Home /> : null} />
      <Route
        path="/quantify"
        element={isAuthenticated ? <Quantify /> : <Navigate to="/signin" />}
      />
      <Route
        path="/team"
        element={isAuthenticated ? <Team /> : <Navigate to="/signin" />}
      />
      <Route
        path="/profile"
        element={isAuthenticated ? <Profile /> : <Navigate to="/signin" />}
      />
      <Route
        path="/signin"
        element={isAuthenticated ? <Navigate to="/" /> : <SignIn />}
      />
      <Route
        path="/signup"
        element={isAuthenticated ? <Navigate to="/" /> : <SignUp />}
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
