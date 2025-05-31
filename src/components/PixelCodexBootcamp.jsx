import leftBrace from "../assets/leftBraces.png";
import rightBrace from "../assets/rightBraces.png";
import anchoredBrackets from "../assets/anchorBrackets.png";
import bars from "../assets/bars.png";
import rightHash from "../assets/rightHash.png";
import leftHash from "../assets/leftHash.png";
import semicolon from "../assets/semiColon.png";
import { useNavigate } from "react-router-dom";

const PixelCodexBootcamp = ({
    inLandingPage
}) => {

    const navigate = useNavigate();

 return (
    <div className="min-h-screen bg-[#1e1e1e] flex items-center justify-center p-8">
      <div className="relative w-full max-w-7xl ">
        {/* Main Card */}
        <div className="bg-[#1e1e1e] border-2 border-[#fbfbfb] rounded-md w-full h-96 relative overflow-hidden flex items-center justify-center">
          {/* Background decorative elements */}
          <div className="absolute top-4 left-4 transform -rotate-6">
            {<img src={leftBrace} alt="leftBrace" className="w-4 md:w-8 h-12 md:h-28 "></img>}
          </div>
          <div className="absolute top-0 right-0 transform">
            {<img src={anchoredBrackets} alt="anchorBrackets" className="w-8 md:w-16 h-16 md:h-28 "></img>}
          </div>
          <div className="absolute bottom-4 right-4 transform rotate-6">
            {<img src={rightBrace} alt="rightBrace" className="w-4 md:w-8 h-12 md:h-28 "></img>}
          </div>
          
          {/* Hash symbols */}
          <div className="absolute top-32 left-40 transform -rotate-12 xl:block hidden">
            {<img src={leftHash} alt="leftHash" className="w-8 md:w-20 h-16 md:h-28 "></img>}
          </div>
          <div className="absolute top-32 right-40 transform rotate-12 xl:block hidden">
            {<img src={rightHash} alt="rightHash" className="w-8 md:w-20 h-16 md:h-28 "></img>}
          </div>
          <div className="absolute top-42 right-64 xl:block hidden">
            {<img src={semicolon} alt="semicolon" className="w-4 md:w-4 h-12 md:h-16 "></img>}
          </div>
          
          {/* Double lines decoration */}
          <div className="absolute bottom-0 left-0">
            {<img src={bars} alt="bars" className="w-12 md:w-20 h-16 md:h-32 "></img>}
          </div>
          
          {/* Main Content - Now properly centered */}
          <div className="text-center relative z-10 karma-regular p-4">
            <h1 className="text-[#fbfbfb] md:text-5xl text-4xl">
              Pixel Codex Summer <br/>
              Programming Bootcamp
            </h1>
          </div>
        </div>
        
        {/* Register Button */}
        { inLandingPage && (<div className="flex justify-center mt-12" onClick={() => navigate("/bootcamp")}>
          <button className="bg-[#ffcc00] hover:bg-yellow-500 text-[#1e1e1e] font-normal text-xl py-3 px-8 rounded-md transition-colors cursor-pointer">
            Register
          </button>
        </div>)} 
        
      </div>
    </div>
  );
}

export default PixelCodexBootcamp