import { Counter } from "./components/Counter";
import { Toaster } from "sonner";

function App() {
  return (
    <div className="min-h-dvh bg-[#16171D] flex items-center justify-center px-4">
      <Counter />
      <Toaster position="bottom-right" />
    </div>
  );
}

export default App;
