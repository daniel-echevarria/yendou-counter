import { useCounter } from "../hooks/useCounter";
import { toast } from "sonner";

export function Counter() {
  const { count, increment } = useCounter();

  const handleIncrement = () => {
    increment();
    toast.custom(() => <CounterToast count={count + 1} />);
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <span className="text-8xl font-semibold text-white tabular-nums">
        {count}
      </span>

      <button
        onClick={handleIncrement}
        className="rounded-xl bg-[#74C898] px-8 py-3 text-sm font-semibold text-white hover:bg-[#5fb882] active:bg-[#4ea872] transition-colors cursor-pointer"
      >
        +1
      </button>
    </div>
  );
}

function CounterToast({ count }: { count: number }) {
  return (
    <div className="relative min-w-[320px] rounded-[10px] p-[2px] shadow-[0_0_0_1px_rgba(40,41,50,0.04),0_2px_2px_-1px_rgba(40,41,50,0.04),0_4px_4px_-2px_rgba(40,41,50,0.04),0_8px_8px_-4px_rgba(40,41,50,0.06),0_16px_32px_rgba(40,41,50,0.06)]"
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
    </div>
  );
}
