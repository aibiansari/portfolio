import Footer from "./components/ui/footer";
import Hero from "./components/ui/hero";
import { Switch } from "./components/ui/switch";
import { useState } from "react";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`p-8 flex flex-col gap-4 ${isDarkMode ? "dark" : ""}`}>
      <div className="text-8xl">Abdullah Ansari's</div>
      <Hero />
      <Footer />
      <div className="absolute right-12 top-12 flex gap-3">
        <p>Dark Mode</p>
        <Switch onCheckedChange={handleToggle} />
      </div>
    </div>
  );
};

export default App;
