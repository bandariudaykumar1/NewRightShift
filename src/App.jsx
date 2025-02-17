import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="bg-white p-8 rounded-xl shadow-xl max-w-3xl mx-auto">
        <div className="flex gap-8 justify-center items-start">
          {/* First Card - Code */}
          <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-lg shadow-lg w-64 border border-blue-100">
            <h2 className="text-xl font-bold mb-6 text-center text-gray-900">RIGHT SHIFT</h2>
            <div className="font-mono bg-blue-50 p-4 rounded-md flex flex-col gap-3 border border-blue-100">
              <div className="flex items-center justify-center">
                <span className="text-gray-700 text-lg">x = 8</span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-gray-700 text-sm tracking-tight">System.out.println(x&gt;&gt;1)</span>
              </div>
            </div>
          </div>

          {/* Second Card - Binary Visualization */}
          <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-lg shadow-lg w-80 border border-blue-100">
            <h2 className="text-xl font-bold mb-4 text-center text-gray-900">8 in binary</h2>
            
            {/* Binary boxes - Centered */}
            <div className="flex justify-start gap-2 mb-4 items-center">
              <span className="font-mono mr-2 text-gray-700">x</span>
              {[1, 0, 0, 0].map((digit, index) => (
                <div key={index} className="w-8 h-8 border-2 border-blue-300 flex items-center justify-center bg-blue-50 hover:bg-blue-100 transition-colors">
                  {digit}
                </div>
              ))}
            </div>

            {/* Animated Slanted Arrows */}
            <div className="relative">
              <span className="absolute -left-4 top-2 font-mono font-bold text-blue-600">8&gt;&gt;1</span>
              <div className="flex justify-center gap-2 mb-1">
                {[...Array(4)].map((_, index) => (
                  <div key={index} className="w-10 h-10 flex items-center justify-center flex-col relative">
                    <span 
                      className="inline-block text-4xl arrow-drop text-blue-500"
                      style={{ 
                        animationDelay: `${index * 0.5}s`
                      }}
                    >
                      ↓
                    </span>
                    {index === 3 && (
                      <span className="text-sm absolute top-10 right-[-20px] font-extrabold text-red-600">
                        Discard
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Result boxes - Centered */}
            <div className="flex justify-start gap-2 items-center ml-8">
              {[0, 1, 0, 0].map((digit, index) => (
                <div key={index} className="w-8 h-8 border-2 border-blue-300 flex items-center justify-center bg-blue-50 hover:bg-blue-100 transition-colors relative">
                  {digit}
                  {index === 0 && (
                    <>
                      <span className="absolute -bottom-8 text-4xl text-blue-500 arrow-insert">↑</span>
                      <span className="absolute -bottom-16 text-sm font-bold text-green-600">Add 0</span>
                    </>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-4">
              <div className="bg-indigo-50 p-2 rounded-md w-48 ml-auto mr-2 border border-indigo-200">
                <p className="font-bold text-gray-900">0100 in Decimal 4</p>
                <p className="mt-2 text-gray-700">Output: 4</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          .arrow-drop {
            display: inline-block;
            opacity: 0;
            transform: translateY(-20px) rotate(-45deg);
            animation: dropAndShow 1s ease-in-out forwards;
          }

          @keyframes dropAndShow {
            0% {
              opacity: 0;
              transform: translateY(-20px) rotate(-45deg);
            }
            100% {
              opacity: 1;
              transform: translateY(0) rotate(-45deg);
            }
          }

          .arrow-insert {
            opacity: 0;
            animation: insertArrow 1s ease-in-out 2s forwards;
          }

          @keyframes insertArrow {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
}

export default App;