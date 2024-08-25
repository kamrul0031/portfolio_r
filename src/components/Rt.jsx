
function Rt() {
  return (
    <div className="flex absolute items-center justify-center h-screen">
      <svg
        viewBox="0 0 100 100"
        className="w-64 h-64"
      >
        <defs>
          <path
            id="circlePath"
            d="M 50, 50
               m -37, 0
               a 37,37 0 1,1 74,0
               a 37,37 0 1,1 -74,0"
          />
        </defs>
        <text fontFamily="Arial" fill="white" fontSize="10">
          <textPath className="text-white" href="#circlePath" startOffset="10%">
            who am i 
          </textPath>
        </text>
        <circle
          cx="50"
          cy="50"
          r="37"
          fill="none"
          stroke="#FC8181"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}

export default Rt;
