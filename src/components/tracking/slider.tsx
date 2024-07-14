import React, { SetStateAction } from "react";

type Props = {
  speed: number;
  setSpeed: React.Dispatch<SetStateAction<number>>;
};

const CountdownTimer = ({ speed, setSpeed }: Props) => {
  return (
    <div className="my-8 flex flex-col items-center">
      <input
        type="range"
        min="1"
        max="10"
        value={speed}
        onChange={(e) => setSpeed(parseInt(e.target.value))}
        className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-orange-500"
        style={{
          background: `linear-gradient(to right, #f97316 ${(speed - 1) * 11.11}%, #e5e7eb ${(speed - 1) * 11.11}%)`
        }}
      />
      <label className="mt-2 text-center font-medium text-orange-500">Speed: {speed}x</label>
    </div>
  );
};

export default CountdownTimer;
