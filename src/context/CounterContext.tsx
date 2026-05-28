import { createContext, useState, type ReactNode } from "react";

export interface CounterContextType {
  count: number;
  increment: () => void;
}

export const CounterContext = createContext<CounterContextType | null>(null);

export function CounterProvider({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);

  return (
    <CounterContext.Provider value={{ count, increment }}>
      {children}
    </CounterContext.Provider>
  );
}
