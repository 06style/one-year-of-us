import { useState } from "react";
import "./WelcomeLock.css";

function WelcomeLock({ onUnlock }) {
  const [accepted, setAccepted] = useState(false);
  const [noCount, setNoCount] = useState(0);

  const noMessages = [
    "No?? Think again... 🥺",
    "Are you sure? Really sure? 😭",
    "You really chose NO? 💔",
    "Nice try... I'm still waiting. 😤❤️",
    "Okay enough... you know the answer. 😂",
    "I'm not opening this website until you say YES. ❤️",
  ];

  const handleNo = () => {
    setNoCount((prev) => Math.min(prev + 1, noMessages.length));
  };

  if (accepted) {
    return (
      <main className="welcome-screen welcome-begin">
        <div className="welcome-glow"></div>

        <div className="welcome-content">
          <span className="welcome-eyebrow">JUST ONE LITTLE THING...</span>

          <div className="welcome-big-heart">♥</div>

          <h1>
            Okayyy...
            <br />
            <span>let's begin our story.</span>
          </h1>

          <p>
            A year of little moments,
            <br />
            memories, laughter and us.
          </p>

          <button className="begin-button" onClick={onUnlock}>
            Begin Our Story
            <span>→</span>
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="welcome-screen">
      <div className="welcome-hearts">
        <span>♡</span>
        <span>♥</span>
        <span>♡</span>
        <span>✦</span>
        <span>♥</span>
        <span>♡</span>
        <span>♥</span>
        <span>✦</span>
      </div>

      <div className="welcome-glow"></div>

      <div className="welcome-content">
        <span className="welcome-eyebrow">BEFORE WE BEGIN...</span>

        <div className="question-heart">
          {noCount === 0 ? "♡" : "🥺"}
        </div>

        <h1>
          Do you
          <br />
          <span>love me?</span>
        </h1>

        <p className={`no-message ${noCount > 0 ? "show" : ""}`}>
          {noCount > 0
            ? noMessages[noCount - 1]
            : "Be honest... I already know the answer. ♡"}
        </p>

        <div className="answer-buttons">
          <button className="yes-button" onClick={() => setAccepted(true)}>
            Yes ❤️
          </button>

          <button
            className={`no-button no-${Math.min(noCount, 5)}`}
            onClick={handleNo}
          >
            No
          </button>
        </div>

        {noCount >= 3 && (
          <span className="waiting-text">
            still waiting for the right answer... ♡
          </span>
        )}
      </div>

      <div className="welcome-bottom">
        <span>01</span>
        <div></div>
        <span>365</span>
      </div>
    </main>
  );
}

export default WelcomeLock;