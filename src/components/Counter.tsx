import { useCounter } from "../hooks/useCounter";

export function Counter() {
  const { count, increment } = useCounter();

  return (
    <div className="flex flex-col items-center gap-8">
      <span className="text-8xl font-semibold text-white tabular-nums">
        {count}
      </span>

      <button
        onClick={increment}
        className="rounded-xl bg-[#74C898] px-8 py-3 text-sm font-semibold text-white hover:bg-[#5fb882] active:bg-[#4ea872] transition-colors cursor-pointer"
      >
        +1
      </button>
    </div>
  );
}
