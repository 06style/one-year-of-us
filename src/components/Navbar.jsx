import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  const [cakeUnlocked, setCakeUnlocked] = useState(
    localStorage.getItem("cakeUnlocked") === "true"
  );

  const [memoriesUnlocked, setMemoriesUnlocked] = useState(
    localStorage.getItem("memoriesUnlocked") === "true"
  );

  // Unlock status update hone par navbar bhi update hoga
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

  const handleLockedClick = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {/* ================= MENU BUTTON ================= */}

      <button
        className={`menu-dot ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Open menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>


      {/* ================= SIDE MENU ================= */}

      <nav
        className={`side-menu ${open ? "menu-open" : ""}`}
      >
        <div className="side-menu-inner">

          {/* MENU HEADER */}

          <div className="menu-title">

            <div>
              <span className="menu-small-title">
                OUR LITTLE WORLD
              </span>

              <h3>
                our memories ♡
              </h3>
            </div>

            <button
              className="menu-close"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              ×
            </button>

          </div>


          {/* ================= HOME ================= */}

          <Link
            to="/"
            className="side-link unlocked"
            onClick={() => setOpen(false)}
          >
            <span>
              <small>01</small>
              Home
            </span>

            <b>♡</b>
          </Link>


          {/* ================= CAKE ================= */}

          {cakeUnlocked ? (

            <Link
              to="/cake"
              className="side-link unlocked"
              onClick={() => setOpen(false)}
            >
              <span>
                <small>02</small>
                Make a Wish
              </span>

              <b>♡</b>
            </Link>

          ) : (

            <span
              className="side-link locked"
              onClick={handleLockedClick}
            >
              <span>
                <small>02</small>
                Make a Wish
              </span>

              <b>🔒</b>
            </span>

          )}


          {/* ================= MEMORIES ================= */}

          {memoriesUnlocked ? (

            <Link
              to="/memories"
              className="side-link unlocked"
              onClick={() => setOpen(false)}
            >
              <span>
                <small>03</small>
                My Favourite Gallery
              </span>

              <b>♡</b>
            </Link>

          ) : (

            <span
              className="side-link locked"
              onClick={handleLockedClick}
            >
              <span>
                <small>03</small>
                My Favourite Gallery
              </span>

              <b>🔒</b>
            </span>

          )}


          {/* ================= FUTURE PAGE ================= */}

          <div className="menu-note">
            <span>♡</span>
            <p>
              some memories are<br />
              meant to be unlocked slowly...
            </p>
          </div>

        </div>
      </nav>


      {/* ================= BACKDROP ================= */}

      {open && (
        <div
          className="menu-backdrop"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}

export default Navbar;