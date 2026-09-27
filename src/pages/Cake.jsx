import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Cake.css";
const BASE = import.meta.env.BASE_URL;

function Cake() {
  const [showWish, setShowWish] = useState(false);
  const [blowing, setBlowing] = useState(false);
  const [candlesOut, setCandlesOut] = useState(false);
  const [showMemories, setShowMemories] = useState(false);

  const videoRefs = useRef([]);

  // Candles remain lit for at least 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWish(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  // Blow animation lasts 4 seconds
  const blowCandles = () => {
    if (blowing) return;

    setShowWish(false);
    setBlowing(true);

    setTimeout(() => {
      setCandlesOut(true);
      setBlowing(false);

      // Reveal photos after candles completely go out
    setTimeout(() => {
  setShowMemories(true);

  // Memories page unlock
  localStorage.setItem("memoriesUnlocked", "true");

  window.dispatchEvent(
    new Event("unlockChanged")
  );
}, 500);
    }, 4000);
  };

  // Autoplay video after collage appears
  useEffect(() => {
    if (!showMemories) return;

    videoRefs.current.forEach((video) => {
      if (video) {
        video.muted = true;
        video.play().catch(() => {});
      }
    });
  }, [showMemories]);

  return (
    <main className="cake-page">

      {/* Floating hearts */}
      <div className="cake-floats" aria-hidden="true">
        <span>♡</span>
        <span>✦</span>
        <span>♡</span>
        <span>✧</span>
        <span>♥</span>
        <span>⋆</span>
        <span>♡</span>
        <span>✦</span>
      </div>


      {/* =====================================================
          MAIN TWO COLUMN AREA
      ===================================================== */}

      <section className="cake-main">

        {/* =================================================
            LEFT — CAKE
        ================================================= */}

        <div className="cake-column">

          <p className="cake-eyebrow">
            MAKE A WISH, MY LOVE
          </p>

          <h1 className="cake-heading">
            One little wish
            <span>for us ♡</span>
          </h1>


          <div className="real-cake">

            {/* CANDLES */}

            <div className="candles">

              {[1, 2, 3, 4, 5].map((number) => (
                <div
                  key={number}
                  className={`candle candle-${number}
                    ${blowing ? "blowing" : ""}
                    ${candlesOut ? "out" : ""}
                  `}
                >

                  <div className="wick"></div>

                  {!candlesOut && (
                    <div className="flame">
                      <div className="inner-flame"></div>
                    </div>
                  )}

                </div>
              ))}

            </div>


            {/* TOP LAYER */}

            <div className="cake-layer top-layer">

              <div className="layer-top"></div>

              <div className="layer-body">

                <div className="top-decoration">
                  ♡ &nbsp; ✦ &nbsp; ♡
                </div>

              </div>

            </div>


            {/* MIDDLE LAYER */}

            <div className="cake-layer middle-layer">

              <div className="layer-top"></div>

              <div className="layer-body">

                <div className="cream-band"></div>

                <div className="layer-decoration">
                  ✦ &nbsp; ♡ &nbsp; ✦
                </div>

              </div>

            </div>


            {/* BOTTOM LAYER */}

            <div className="cake-layer bottom-layer">

              <div className="layer-top"></div>

              <div className="layer-body">

                <div className="cream-band"></div>

                <div className="cake-text">
                  <strong>one year</strong>
                  <span>of us ♡</span>
                </div>

                <div className="bottom-decoration">
                  ♡ &nbsp; ✦ &nbsp; ♡ &nbsp; ✦ &nbsp; ♡
                </div>

              </div>

            </div>


            {/* PLATE */}

            <div className="cake-plate"></div>

          </div>


          <p className="cake-bottom-text">
            one year of little moments,
            <br />
            laughs, memories & us ♡
          </p>

        </div>


        {/* =================================================
            RIGHT — RESERVED COLLAGE SPACE
        ================================================= */}

        <div
          className={`collage-column ${
            showMemories ? "collage-visible" : ""
          }`}
        >

          {/* Heading appears with collage */}

          <div className="memory-title">

            <p>
              A LITTLE PIECE
            </p>

            <h2>
              of us
              <span>♡</span>
            </h2>

          </div>


          {/* CONNECTED COLLAGE */}

          <div className="connected-collage">

            {/* 1 */}
            <div className="memory m1">
              <img
                src={`${BASE}images/memories/cake-memory-1.png`}
                alt="Memory 1"
              />
            </div>


            {/* 2 */}
            <div className="memory m2">
              <img
              src={`${BASE}images/memories/cake-memory-2.png`}
                alt="Memory 2"
              />
            </div>


            {/* 3 — LARGE */}
            <div className="memory m3">
              <img
              src={`${BASE}images/memories/cake-memory-3.png`}
                alt="Memory 3"
              />
            </div>


            {/* 4 — SMALL */}
            <div className="memory m4">
              <img
              src={`${BASE}images/memories/cake-memory-4.jpeg`}
                alt="Memory 4"
              />
            </div>


            {/* 5 */}
            <div className="memory m5">
              <img
               src={`${BASE}images/memories/cake-memory-5.png`}
                alt="Memory 5"
              />
            </div>


            {/* 6 — BIGGEST VIDEO */}
            <div className="memory m6">

              <video
                ref={(el) => {
                  videoRefs.current[0] = el;
                }}
               src={`${BASE}images/memories/cake-video-6.mp4`}
                muted
                loop
                playsInline
                preload="auto"
              />

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          BELOW BOTH COLUMNS
          VOICE + CONTINUE
      ===================================================== */}

      <section
        className={`after-memory-section ${
          showMemories ? "after-visible" : ""
        }`}
      >

        <div className="voice-note">

          <span className="voice-heart">
            ♡
          </span>

          <p>
            A LITTLE VOICE NOTE
          </p>

          <h3>
            Just for you...
          </h3>

          <span className="voice-hint">
            press play when you're ready ♡
          </span>
<audio
  controls
  src={`${BASE}audio/voice-note.mp3`}
/>

<Link
  to="/memories"
  className="cake-continue"
  onClick={() => {
    localStorage.setItem("memoriesUnlocked", "true");
    window.dispatchEvent(new Event("unlockChanged"));
  }}
>
  Continue to our memories
  <span>→</span>
</Link>

  </div>

      </section>


      {/* =====================================================
          WISH POPUP
      ===================================================== */}

      {showWish && (

        <div className="wish-overlay">

          <div className="wish-popup">

            <span className="wish-star">
              ✦
            </span>

            <p>
              A LITTLE MOMENT
            </p>

            <h2>
              Make a wish...
            </h2>

            <div className="wish-line">
              ♡
            </div>

            <span className="wish-message">
              Close your eyes,
              <br />
              think of us,
              <br />
              and make a wish. ♡
            </span>

            <button
              onClick={blowCandles}
              disabled={blowing}
            >
              {blowing
                ? "Blowing the candles..."
                : "Blow the candles ♡"}
            </button>

          </div>

        </div>

      )}

    </main>
  );
}

export default Cake;