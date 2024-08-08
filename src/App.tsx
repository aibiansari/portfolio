import Footer from "./components/ui/footer";
import Navbar from "./components/ui/navbar";
import { Switch } from "./components/ui/switch";
import { useState } from "react";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`flex flex-col gap-4 ${isDarkMode ? "dark" : ""}`}>
      <Navbar />
      <Footer />
      <div className="absolute left-8 bottom-6 flex gap-3">
        <p>Dark Mode</p>
        <Switch onCheckedChange={handleToggle} />
      </div>
    </div>
  );
};

export default App;
