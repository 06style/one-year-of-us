import {
  Routes,
  Route,
  Navigate,
  useLocation
} from "react-router-dom";

import { useEffect, useState } from "react";

import Home from "./pages/Home";
import Cake from "./pages/Cake";
import Memories from "./pages/Memories";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [cakeUnlocked, setCakeUnlocked] = useState(
    localStorage.getItem("cakeUnlocked") === "true"
  );

  const [memoriesUnlocked, setMemoriesUnlocked] = useState(
    localStorage.getItem("memoriesUnlocked") === "true"
  );

  useEffect(() => {
    const updateUnlocks = () => {
      setCakeUnlocked(
        localStorage.getItem("cakeUnlocked") === "true"
      );

      setMemoriesUnlocked(
        localStorage.getItem("memoriesUnlocked") === "true"
      );
    };

    window.addEventListener("unlockChanged", updateUnlocks);

    return () => {
      window.removeEventListener("unlockChanged", updateUnlocks);
    };
  }, []);

  return (
    <>
      <ScrollToTop />

      <audio
        id="siteMusic"
        src={`${import.meta.env.BASE_URL}music/story-music.mp3`}
        loop
        preload="auto"
      />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/cake"
          element={
            cakeUnlocked
              ? <Cake />
              : <Navigate to="/" replace />
          }
        />

        <Route
          path="/memories"
          element={
            memoriesUnlocked
              ? <Memories />
              : (
                <Navigate
                  to={cakeUnlocked ? "/cake" : "/"}
                  replace
                />
              )
          }
        />

        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />

      </Routes>
    </>
  );
}

export default App;