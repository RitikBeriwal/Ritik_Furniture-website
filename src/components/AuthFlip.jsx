import { useState, useEffect } from "react";

export default function AuthFlip() {
  const [active, setActive] = useState(false);
  const [showForgot, setShowForgot] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  //  Handle screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* ===== INTERNAL CSS ===== */}
      <style>{`
        .input {
          width: 100%;
          margin-bottom: 12px;
          padding: 12px 16px;
          background: #E6D5C3;
          border-radius: 6px;
          font-size: 14px;
          color: #2B2B2B;
          outline: none;
        }
        .input:focus {
          box-shadow: 0 0 0 2px #C9A24D;
        }
        .btn-primary {
          background: #3E2723;
          color: #FAF7F2;
          padding: 12px 40px;
          border-radius: 9999px;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .btn-primary:hover {
          background: #C9A24D;
          color: #3E2723;
        }

        /* ===== DESKTOP FLIP ONLY ===== */
        @media (min-width: 768px) {
          .right-panel-active .sign-in {
            transform: translateX(100%);
            opacity: 0;
          }
          .right-panel-active .sign-up {
            transform: translateX(100%);
            opacity: 1;
            z-index: 5;
          }
          .right-panel-active .overlay-container {
            transform: translateX(-100%);
          }
          .right-panel-active .overlay {
            transform: translateX(50%);
          }
        }
      `}</style>

      {/* ===== PAGE ===== */}
      <div className="min-h-screen flex items-center justify-center bg-[#FAF7F2] px-4">
        <div
          className={`relative w-full max-w-[900px] min-h-[520px] bg-white rounded-2xl shadow-xl overflow-hidden
          transition-all duration-700 ${
            active && isDesktop ? "right-panel-active" : ""
          }`}
        >

          {/* ===== MOBILE TOGGLE ===== */}
          <div className="md:hidden flex justify-center gap-6 py-6">
            <button
              onClick={() => setActive(false)}
              className={`text-sm font-medium ${
                !active ? "text-[#3E2723] underline" : "text-gray-400"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setActive(true)}
              className={`text-sm font-medium ${
                active ? "text-[#3E2723] underline" : "text-gray-400"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* ===== SIGN IN ===== */}
          <div
            className={`sign-in md:absolute md:top-0 md:left-0 md:w-1/2 w-full h-full
            flex flex-col justify-center items-center px-8 md:px-12 transition-all duration-700
            ${active ? "hidden md:flex opacity-0 pointer-events-none" : "flex opacity-100"}`}
          >
            <h2 className="text-3xl font-serif mb-4 text-[#3E2723]">Login</h2>

            <input className="input" placeholder="Email" />
            <input className="input" placeholder="Password" type="password" />

            <p
              onClick={() => setShowForgot(true)}
              className="text-sm mb-4 cursor-pointer text-[#6b5f55] hover:text-[#C9A24D]"
            >
              Forgot your password?
            </p>

            <button className="btn-primary">SIGN IN</button>
          </div>

          {/* ===== SIGN UP ===== */}
          <div
            className={`sign-up md:absolute md:top-0 md:left-0 md:w-1/2 w-full h-full
            flex flex-col justify-center items-center px-8 md:px-12 transition-all duration-700
            ${active ? "flex opacity-100" : "hidden md:flex opacity-0 pointer-events-none"}`}
          >
            <h2 className="text-3xl font-serif mb-4 text-[#3E2723]">
              Create Account
            </h2>

            <input className="input" placeholder="Name" />
            <input className="input" placeholder="Email" />
            <input className="input" placeholder="Password" type="password" />

            <button className="btn-primary mt-3">SIGN UP</button>
          </div>

          {/* ===== FORGOT PASSWORD ===== */}
          {showForgot && (
            <div className="absolute inset-0 bg-white flex flex-col items-center justify-center px-8 z-50">
              <h2 className="text-2xl font-serif text-[#3E2723] mb-4">
                Reset Password
              </h2>
              <input className="input" placeholder="Email" />
              <button className="btn-primary mt-3">
                SEND RESET LINK
              </button>
              <button
                onClick={() => setShowForgot(false)}
                className="mt-4 text-sm underline"
              >
                Back
              </button>
            </div>
          )}

          {/* ===== OVERLAY (DESKTOP ONLY) ===== */}
          <div className="hidden md:block absolute top-0 left-1/2 w-1/2 h-full overflow-hidden overlay-container transition-transform duration-700 z-20">
            <div className="relative -left-full w-[200%] h-full bg-[#3E2723] text-white overlay transition-transform duration-700">

              <div className="absolute left-0 w-1/2 h-full flex flex-col items-center justify-center text-center px-10">
                <h2 className="text-3xl font-serif mb-4">Welcome Back!</h2>
                <button
                  onClick={() => setActive(false)}
                  className="border px-10 py-2 rounded-full hover:bg-[#C9A24D]"
                >
                  SIGN IN
                </button>
              </div>

              <div className="absolute right-0 w-1/2 h-full flex flex-col items-center justify-center text-center px-10">
                <h2 className="text-3xl font-serif mb-4">Hello, Friend!</h2>
                <button
                  onClick={() => setActive(true)}
                  className="border px-10 py-2 rounded-full hover:bg-[#C9A24D]"
                >
                  SIGN UP
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}
