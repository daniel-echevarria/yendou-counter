import { useCounter } from "../hooks/useCounter";
import { toast } from "sonner";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  angle: number;
  distance: number;
}

function createSparkles(): Sparkle[] {
  return Array.from({ length: 14 }, (_, i) => ({
    id: Date.now() + i,
    x: (Math.random() - 0.5) * 80,
    y: (Math.random() - 0.5) * 50,
    size: Math.random() * 6 + 3,
    angle: (i * 26) + (Math.random() * 15 - 7),
    distance: Math.random() * 70 + 50,
  }));
}

export function Counter() {
  const { count, increment } = useCounter();
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  const handleIncrement = () => {
    increment();
    setSparkles(createSparkles());
    toast.custom(() => <CounterToast count={count + 1} />);
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="relative h-[96px] flex items-center justify-center">
        {/* Sparkles */}
        <AnimatePresence>
          {sparkles.map((sparkle) => {
            const rad = (sparkle.angle * Math.PI) / 180;
            const tx = Math.cos(rad) * sparkle.distance;
            const ty = Math.sin(rad) * sparkle.distance;

            return (
              <motion.span
                key={sparkle.id}
                initial={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                animate={{ opacity: 0, scale: 0, x: tx, y: ty }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                onAnimationComplete={() =>
                  setSparkles((prev) => prev.filter((s) => s.id !== sparkle.id))
                }
                className="absolute rounded-full bg-[#74C898]"
                style={{
                  width: sparkle.size,
                  height: sparkle.size,
                }}
              />
            );
          })}
        </AnimatePresence>

        {/* Counter number */}
        <div className="overflow-hidden">
          <AnimatePresence mode="popLayout">
            <motion.span
              key={count}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="text-8xl font-semibold text-white tabular-nums block"
            >
              {count}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      <motion.button
        onClick={handleIncrement}
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
        className="rounded-[10px] bg-[#74C898] px-10 py-4 text-base font-semibold text-white shadow-[0_0_20px_rgba(116,200,152,0.2)] hover:shadow-[0_0_30px_rgba(116,200,152,0.35)] hover:bg-[#5fb882] active:bg-[#4ea872] transition-[background-color,box-shadow] duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#74C898]"
      >
        +1
      </motion.button>
    </div>
  );
}

function CounterToast({ count }: { count: number }) {
  return (
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      className="relative min-w-[280px] sm:min-w-[320px] rounded-[10px] p-[2px] shadow-[0_0_0_1px_rgba(40,41,50,0.04),0_2px_2px_-1px_rgba(40,41,50,0.04),0_4px_4px_-2px_rgba(40,41,50,0.04),0_8px_8px_-4px_rgba(40,41,50,0.06),0_16px_32px_rgba(40,41,50,0.06)]"
      style={{
        background:
          "radial-gradient(30% 200% at 0% 50%, rgba(116,200,152,0.4) 0%, rgba(116,200,152,0.01) 100%), #3E3F45",
      }}
    >
      <div
        className="flex items-center gap-3 rounded-[8px] py-4 pr-5 pl-4"
        style={{
          background:
            "radial-gradient(30% 200% at 0% 50%, rgba(116,200,152,0.2) 0%, rgba(116,200,152,0.02) 100%), #46474F",
        }}
      >
        {/* Circled check icon */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#74C898"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="9.5" />
          <polyline points="8.5 12 11 14.5 15.5 9.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        <div className="flex flex-col gap-1.5">
          <span className="text-sm font-semibold text-white leading-4">
            Incremented
          </span>
          <span className="text-sm text-white font-normal leading-4">
            Counter is now {count}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
