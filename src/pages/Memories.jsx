import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Memories.css";
const BASE = import.meta.env.BASE_URL;

function Memories() {

  const videoRefs = useRef([]);

  const memories = [
  { type: "photo", src: `${BASE}images/memories/photo-1.png`, className: "memory-1" },
  { type: "photo", src: `${BASE}images/memories/photo-2.jpeg`, className: "memory-2" },
  { type: "video", src: `${BASE}videos/memories/video-1.mp4`, className: "memory-3" },
  { type: "photo", src: `${BASE}images/memories/photo-3.png`, className: "memory-4" },
  { type: "photo", src: `${BASE}images/memories/photo-4.png`, className: "memory-5" },
  { type: "video", src: `${BASE}videos/memories/video-2.mp4`, className: "memory-6" },
  { type: "photo", src: `${BASE}images/memories/photo-5.png`, className: "memory-7" },
  { type: "photo", src: `${BASE}images/memories/photo-6.jpeg`, className: "memory-8" },
  { type: "video", src: `${BASE}videos/memories/video-3.mp4`, className: "memory-9" },
  { type: "photo", src: `${BASE}images/memories/photo-7.jpeg`, className: "memory-10" },
  { type: "photo", src: `${BASE}images/memories/photo-8.jpeg`, className: "memory-11" },
  { type: "photo", src: `${BASE}images/memories/photo-9.png`, className: "memory-12" },
  { type: "video", src: `${BASE}videos/memories/video-4.mp4`, className: "memory-13" },
  { type: "photo", src: `${BASE}images/memories/photo-10.png`, className: "memory-14" },
  { type: "video", src: `${BASE}videos/memories/video-5.mp4`, className: "memory-15" },
  { type: "photo", src: `${BASE}images/memories/photo-11.jpeg`, className: "memory-16" },
  { type: "photo", src: `${BASE}images/memories/photo-12.png`, className: "memory-17" },
  { type: "video", src: `${BASE}videos/memories/video-6.mp4`, className: "memory-18" },
  { type: "photo", src: `${BASE}images/memories/photo-13.jpeg`, className: "memory-19" },
  { type: "photo", src: `${BASE}images/memories/photo-14.png`, className: "memory-20" },
  { type: "video", src: `${BASE}videos/memories/video-7.mp4`, className: "memory-21" },
  { type: "photo", src: `${BASE}images/memories/photo-15.png`, className: "memory-22" },
  { type: "video", src: `${BASE}videos/memories/video-8.mp4`, className: "memory-23" },
  { type: "photo", src: `${BASE}images/memories/photo-16.jpg`, className: "memory-24" },
  { type: "video", src: `${BASE}videos/memories/video-9.mp4`, className: "memory-25" },
  { type: "photo", src: `${BASE}images/memories/photo-17.jpg`, className: "memory-26" },
];

  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (!video) return;

      video.muted = true;
      video.loop = true;
      video.playsInline = true;

      video.play().catch(() => {});
    });
  }, []);

  return (
    <main className="memories-page">

      {/* BACK TO HOME */}
      <Link
        to="/"
        className="back-home"
        aria-label="Back to home"
      >
        ←
      </Link>

      {/* GLOWING HEADING */}
      <header className="gallery-heading">

        <div className="heading-top">
          <span>♡</span>
          <i></i>
          <p>MY FAVOURITE</p>
          <i></i>
          <span>♡</span>
        </div>

        <h1>
          GALLERY<span>♡</span>
        </h1>

        <div className="heading-line">
          <span></span>
          <b>♡</b>
          <span></span>
        </div>

      </header>


      {/* MEMORY COLLAGE */}
      <section className="memories-collage">

        {memories.map((memory, index) => (

          <div
            className={`memory-piece ${memory.className}`}
            key={index}
          >

            {memory.type === "photo" ? (

              <img
                src={memory.src}
                alt=""
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement.classList.add(
                    "media-placeholder",
                    "photo-placeholder"
                  );
                }}
              />

            ) : (

              <video
                ref={(el) => {
                  videoRefs.current[index] = el;
                }}
                src={memory.src}
                muted
                loop
                autoPlay
                playsInline
                preload="metadata"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement.classList.add(
                    "media-placeholder",
                    "video-placeholder"
                  );
                }}
              />

            )}

          </div>

        ))}

      </section>

    </main>
  );
}

export default Memories;