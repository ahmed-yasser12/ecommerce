import { Star } from "lucide-react";

function HalfStar() {
  return (
    <div className="relative w-4 h-4">
      <Star size={16} className="text-gray-300 absolute" />

      <div className="absolute overflow-hidden w-1/2">
        <Star size={16} fill="currentColor" className="text-yellow-400" />
      </div>
    </div>
  );
}

export default HalfStar;