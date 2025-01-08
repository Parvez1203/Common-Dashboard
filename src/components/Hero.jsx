import Img1 from "../components/images/hero-img.jpg";
function Hero() {
  return (
    <div className="relative h-screen rounded-3xl overflow-hidden">
      <img src={Img1} alt="Modern Kitchen Interior" className="w-full h-full" />
      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute top-8 left-8">
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-[#e8e5e0]/80 rounded-full flex items-center justify-center">
              <span className="text-[#262626]">⌂</span>
            </div>
          </div>
          <div className="absolute inset-0 animate-spin-slow">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path
                id="circle"
                d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                fill="none"
                stroke="#e8e5e0"
                strokeWidth="1"
              />
              <text fill="#e8e5e0" fontSize="8">
                <textPath href="#circle">
                  Remodeling Service • Since 2023 • Transform & Design •
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </div>

      <div className="absolute top-20 right-14 max-w-xs">
        <p className="text-[#e8e5e0] text-md">
          Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </p>
      </div>

      <div className="absolute bottom-32 left-12 text-white">
        <h1 className="text-7xl font-semibold mb-4 ">Your local expert</h1>
        <div className="flex items-center space-x-4">
          <span className="text-5xl italic">with</span>
          <span className="text-7xl font-semibold">remodeling</span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
