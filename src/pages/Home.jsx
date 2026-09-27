import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
const BASE = import.meta.env.BASE_URL;

function Home() {
  const [openPhoto, setOpenPhoto] = useState(null);
  const [showContinue, setShowContinue] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContinue(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const memories = [
  {
    image: `${BASE}images/home-photo-1.png`,
    note: "One little picture, one little moment… and somehow, it became one of the memories I want to keep forever.🌹🌸 ♡",
  },
  {
    image: `${BASE}images/home-photo-2.jpeg`,
    note: "Some moments feel ordinary when they happen, but later you realise they quietly became some of your favourites. ✨",
  },
  {
    image: `${BASE}images/home-photo-3.png`,
    note: "And somewhere between all these tiny moments, all the laughs and everything in between… we became us. 🥹❤️",
  },
];

  return (
    <main className="home">

      {/* ================= FLOATING DETAILS ================= */}
      <div className="floating-elements" aria-hidden="true">

        <span className="float f1">♡</span>
        <span className="float f2">✦</span>
        <span className="float f3">♥</span>
        <span className="float f4">✧</span>
        <span className="float f5">♡</span>
        <span className="float f6">⋆</span>
        <span className="float f7">❤</span>
        <span className="float f8">✦</span>
        <span className="float f9">♡</span>
        <span className="float f10">˚♡</span>
        <span className="float f11">✧</span>
        <span className="float f12">♥</span>
        <span className="float f13">⋆</span>
        <span className="float f14">♡</span>
        <span className="float f15">✦</span>
        <span className="float f16">❤</span>
        <span className="float f17">♡</span>
        <span className="float f18">✧</span>
        <span className="float f19">♥</span>
        <span className="float f20">⋆</span>
        <span className="float f21">♡</span>
        <span className="float f22">✦</span>
      </div>


      {/* ================= PAGE 1 — HERO ================= */}
      <section className="home-section hero-section">

        <div className="hero-content">

          <div className="hero-text">

            <p className="tiny-heading">
              ONE YEAR🫀🫂 • OUR STORY🤭🥹 • 28 SEPTEMBER 2024🌏💌
            </p>

            <h1>
              Happy
              <span>One Year</span>
              <em>of Us🫂🧿</em>
            </h1>

            <p className="hero-line">
              One year of little moments🤭,
              <br />
              silly laughs, and a love that slowly became HOME😘🏠. ♡
            </p>

            <div className="tiny-heart-line">
              ♡ YOU BECAME MY HOME 🥹🏠 ✦ MY SAFEST PLACE 🧿💌 ♡
            </div>

          </div>


          {/* ================= FAVOURITE MEMORY ================= */}
          <div className="hero-photo-wrap">

            <div className="photo-glow"></div>

            <div className="hero-photo-card">
<video
  src={`${BASE}videos/fav-mem.mp4`}
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
/>

              <span className="photo-corner top-left">♡</span>
              <span className="photo-corner bottom-right">✦</span>

            </div>

            <p className="photo-caption">
              a Little piece of my Favourite Memory🤌🏻🫀🫂 ♡
            </p>


            {/* ================= FLOATING STICKERS ================= */}
            <div className="hero-stickers" aria-hidden="true">

              <span className="sticker sticker-heart">
                ♡
              </span>

              <span className="sticker sticker-sparkle">
                ✦
              </span>

              <span className="sticker sticker-star">
                ✧
              </span>

              <span className="sticker sticker-love">
                ♥
              </span>

              <span className="sticker sticker-flower">
                ✿
              </span>

              <span className="sticker sticker-dot">
                ·
              </span>

            </div>

          </div>

        </div>


        <div className="scroll-indicator">
          <span></span>
          <b>↓</b>
        </div>

      </section>


      {/* ================= PAGE 2 — OUR STORY ================= */}
      <section className="home-section intro-section">

        <div className="section-content">

          <p className="section-eyebrow">
            SOMEHOW, WE BECAME US♥️🫀🧿
          </p>

          <h2>
            One year,
            <span>Endless love ♥️• Endless Fights ♥️ • Endless Trust♥️ ♡</span>
          </h2>

          <div className="soft-divider">
            <i></i>
            <span>♡</span>
            <i></i>
          </div>

          <p className="big-note">
            Last year , On this day , I didn't know You existed Baba ki waajh se hm dono mile 🫶🏻🥹
            ek dusre ko jana pehchana aur phir Pta hi nhi chla that YOU  BECAME MY FAVOURITE PART OF THE DAY🥰👀.
            random coversations , promises , silly laughs , cries fightss , late night talks ,Video calls , Every moment we spent together
            was as SPECIAL as YOU are🥰💝 ,I didn't knew ki yeh din meri life me ek naya insaan , ek naya rishta , aur meri life ka sbse special & best person lekr aayega ,
            when i saw you fr the first time , i didn't knew TUM MERE LIYE ITNE SPECIAL BAN JAOGE ,& I'M VERY HAPPY THAT IT HAPPENED , BE MINE ALWAYS 
            & I LOVEEE UUU  SOO MUCHH BISSUUU ♥️🫀🧿
            
            <br />
            <br />
            You are my Favorite person , favourite human , favouritee everything,& will always be my Favourite , Bissu 🫶🏻🥹.
            I know sometimes we laugh , sometimes we fight , we misunderstand each other , we talk , but the Thing is that 
            We know We are always there fr each other no matter what🫀🫂 , no matter how much we fight , we'll stay together & choose each other
            over anything . I'll always support you & will always be by your side🌏💐🫂 . i can't tell how much i love & miss uu specially when you're
            not here .We are aparted by distance but very close to each other's HEART ... hm yeh bhi jante hai ki HM tumhe bht pareshan krte hai , 
            chedte hai , kalesh krte hai but  ab toh phass gye beta tum😌😚 ...peecha nhi chorengee ab🤭 .. I wish ki hm dono HMESHA AISE HI SATH RHE
            HASTE ,KHELTE ,JHAGADTE, MANATE, AUR AISE HI EK DUSRE KE SATH KHUBB SARA  PYARR KRTE HUE  KHUSH RAHE.🧿💌🤌🏻♥️ ♡

          </p>

        </div>

      </section>


      {/* ================= PAGE 3 — THREE LITTLE PIECES ================= */}
      <section className="home-section photos-section">

        <div className="section-content photos-content">

          <p className="section-eyebrow">
            LITTLE MOMENTS
          </p>

          <h2 className="photo-heading">
            Three little pieces
            <span>of us ✨</span>
          </h2>

          <p className="photo-instruction">
            tap a picture to remember the moment ♡
          </p>


          <div className="memory-grid">

            {memories.map((memory, index) => (
              <button
                className="memory-card"
                key={index}
                onClick={() => setOpenPhoto(memory)}
                aria-label={`Open memory ${index + 1}`}
              >

                <div className="memory-image">

                  <img
                    src={memory.image}
                    alt={`Our memory ${index + 1}`}
                  />

                </div>

                <span className="memory-number">
                  0{index + 1}
                </span>

                <span className="memory-sparkle">
                  ✦
                </span>

              </button>
            ))}

          </div>

        </div>

      </section>


      {/* ================= PAGE 4 — FINAL NOTE ================= */}
      <section className="home-section note-section">

        <div className="section-content final-note-content">

          <span className="big-floating-heart">
            ♡
          </span>

          <p className="section-eyebrow">
            ONE LITTLE PROMISE
          </p>

          <h2>
            TO MY FOREVER FAVOURITE PERSON🫂🫀🧿
            <span>MERE PYARE THAKUR SAHAB🤭🥹 </span>
          </h2>

          <p className="big-note final-note">
            Thank you fr every laugh, every chaos , every silly things ,  every random conversation,every silly moment,
            thank you fr being Mine 🌸🧿💌, fr being my favourite person🫂🫀 , fr being the safest space🫶🏻where I can be myself , fr being the one 
            who makes me feel loved & fr always understanding me & making me feel special & relaxed . i think pyar krna easy hota hai , but 
            samne wale ko loyal rhkr relaxed feel krwana is a luxury & i feel so blessed touchwood ki hme tum mile💫🌏 ..jante hai hm dono long distance
            me hai but still we're so close to each other . thnkuu mere nakhre🤌🏻 , rona dhona aur drama sunne ke liye🤌🏻 , thnkuu hmesha mere sath rehne 
            ke liye aur HME itna special feel krwane ke liye and hmesha mera dhyan rkhne ke liye🤌🏻 , I promise ki hm ladd lenge🤌🏻 , jhagad lenge 
            , maar lenge🤌🏻 , suna lenge🤌🏻 , pyar krenge 🤌🏻 pr rhnge tumhre hi sath 🤌🏻, tumhri hi chati pr baithe rhnge🫂🫀🧿🫶🏻🥰.. i loveeee uuhhh bbbyyy 🫶🏻🥹♥️🫀🧿 
            <br />
            <br />
            TUMHRE SATH SPEND KRA HUA YEH EK SAAL MERE LIYE BEST RHEGA aur ONE OF MY BEST MEMORIES ME RHEGA🌻🧿💌 ..hme hmesha yaad rhega ki kese hm tumse mile ,
            tumhre bane , tum mere bane , aur hm dono hi ek dusri ke liye zaroori hote gye.. jante hai abhi bht durr hai hm dono isiliye APNA DHYN RKHO 
            BHT ACHE SE HM JB TK HAI TB TK TUMHRE HAI😌🥹 isiliye apna dhyn rkho sbse jyda aur tum mere liye sbse jyda zaroori ho🤌🏻🫀🫂 .
            I WISH KI JESE HMARA YEH EK SAAL ITNE PYARR SE , JHAGADTE MANATE AUR EK DUSRE KA SATH DEKR BEETA🤌🏻🧿🫶🏻 ...upcoming year bhi utna hi special hoga 
            I WISH KI PURI DUNIYA TUMHRE SATH GHUME , SB KUCH TUMHRE SATH EXPERIENCE KR SKE AUR HMARE PASS KHOOB SARA PAISE HO .. I WISH HM DONO KE PASS VOH SB KUCH 
            JO JO HM DONO DESERVE KRTE HAI AUR DESIRE KRTE HAI BUT SB KUCH MIL JANE KE BAAD BHI HM DONO EK DUSRE KE LIYE HMESHA UTNE HI SPECIAL HO JITNE HMESHA SE HAI..
            AUR HMARA PYAAR SAAL KE BADHNE KE BADHTA HI  JAE🤭🥹❤️ . I LOVEEEE UUUU 🤌🏻🫂🫀& MISSS UUUU SOOOO MUCHIEEE🥹❤️🤌🏻🫂🫀
            One year down,
            and I still want all the little &  best moments with you only. ❤️
          </p>
🤭🥹😘🌹🌸🌻🧿💌🤌🏻🫂🫀🧿👀♥️
          <div className="tiny-heart-line">
            ♡ ───── ✦ ───── ♡
          </div>

        </div>

      </section>


      {/* ================= PAGE 5 — CONTINUE ================= */}
      <section className="home-section continue-section">

        <div className="continue-content">

          <p className="section-eyebrow">
            EMOTIONAL MT HONA OKKIE 😘✨ ABHI AUR BHI HAI 👀💫
          </p>

          <h2>
          I JUST WISH KI HM DONO KO KISI KI BHI👀♥️
            <span>NAZAR NA LGE ITTU SI BHI🧿💌 </span>
          </h2>

          <p>
            This is only one little chapter😌✨.
            <br />
            There are still so many memories waiting for us💫. ♡
          </p>

          {showContinue && (

            <Link
              to="/cake"
              className="continue-button"
              onClick={() => {

                localStorage.setItem(
                  "cakeUnlocked",
                  "true"
                );

                window.dispatchEvent(
                  new Event("unlockChanged")
                );

                window.scrollTo(0, 0);

              }}
            >
              Continue ♥️
              <span>→</span>
            </Link>

          )}

        </div>

      </section>


      {/* ================= PHOTO MODAL ================= */}
      {openPhoto && (

        <div
          className="photo-modal"
          onClick={() => setOpenPhoto(null)}
        >

          <div
            className="photo-modal-box"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="modal-close"
              onClick={() => setOpenPhoto(null)}
              aria-label="Close"
            >
              ×
            </button>

            <img
              src={openPhoto.image}
              alt="Our memory"
            />

            <p className="modal-note">
              {openPhoto.note}
            </p>

            <span className="modal-heart">
              ♡
            </span>

          </div>

        </div>

      )}

    </main>
  );
}

export default Home;