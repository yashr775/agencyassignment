import Header from "./components/Header";
import Middlesection from "./components/Middlesection";


function App() {
  return (
    <>
      <div className="bg-blue-950 min-h-screen pt-10">
        <Header />
        <span className="text-white flex justify-center mt-10 text-6xl font-extrabold">OUR ICONIC RIDES</span>
        <Middlesection />
      </div>
    </>
  );
}

export default App;
