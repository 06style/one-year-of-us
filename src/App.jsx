import {
  Routes,
  Route,
  Navigate,
  useLocation
} from "react-router-dom";

import { useEffect } from "react";

import Home from "./pages/Home";
import Cake from "./pages/Cake";
import Memories from "./pages/Memories";


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });
  }, [pathname]);

  return null;
}


function App() {

  // ================= MUSIC =================
  useEffect(() => {
    const startMusic = () => {
      const audio = document.getElementById("siteMusic");

      if (audio) {
        audio.volume = 0.35;

        audio.play().catch(() => {});
      }
    };

    window.addEventListener("click", startMusic, {
      once: true
    });

    return () => {
      window.removeEventListener("click", startMusic);
    };
  }, []);


  // ================= UNLOCK STATUS =================

  const cakeUnlocked =
    localStorage.getItem("cakeUnlocked") === "true";

  const memoriesUnlocked =
    localStorage.getItem("memoriesUnlocked") === "true";


  return (
    <>

      {/* ================= SCROLL TO TOP ================= */}
      <ScrollToTop />


      {/* ================= WEBSITE MUSIC ================= */}
      <audio
        id="siteMusic"
        src="/music/story-music.mp3"
        loop
        preload="auto"
      />


      {/* ================= ROUTES ================= */}

      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={<Home />}
        />


        {/* CAKE */}
        <Route
          path="/cake"
          element={
            cakeUnlocked
              ? <Cake />
              : <Navigate to="/" replace />
          }
        />


        {/* MEMORIES */}
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


        {/* UNKNOWN URL */}
        <Route
          path="*"
          element={
            <Navigate
              to="/"
              replace
            />
          }
        />

      </Routes>

    </>
  );
}


export default App;