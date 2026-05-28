import { Counter } from "./components/Counter";
import { Toaster } from "sonner";

function App() {
  return (
    <div className="min-h-screen bg-[#16171D] flex items-center justify-center">
      <Counter />
      <Toaster position="bottom-right" />
    </div>
  );
}

export default App;
