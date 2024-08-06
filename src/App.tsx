import Footer from "./components/footer";
import Hero from "./components/hero";

const App = () => {
  return (
    <div className="p-8 flex flex-col gap-4">
      <div className="text-8xl">Abdullah Ansari</div>
      <Hero />
      <Footer />
    </div>
  );
};

export default App;
