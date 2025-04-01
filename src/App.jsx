import "./App.css";
import Header from "./components/header"; // Changed import to default
import ProductCard from "./components/product-card";

function App() {
  return (
    <div className="w-full h-screen bg-pink-200">
    <div className="w-[500px] flex flex-col justify-center items-center  bg-gray-200 h-[500px] relative " >
      <div className="w-[90px] h-[90px] bg-red-600" ></div>
      <div className="w-[90px] h-[90px] bg-green-500 fixed right-[50px] bottom-[50px]"></div>
      <div className="w-[90px] h-[90px] bg-yellow-500 absolute right-[50px] top-[50px]"></div>
      <div className="w-[90px] h-[90px] bg-blue-900"></div>
    </div>
    </div>
    
  );
}

export default App;
