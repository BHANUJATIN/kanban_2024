import "./App.css";
import KanbanBoard from "./components/KanbanBoard";
import Navbar from "./components/Navbar";
import AvatarGrp from "./components/AvatarGrp";
import {
  HeartIcon,
  GlobeAsiaAustraliaIcon,
  ServerIcon,
} from "@heroicons/react/24/outline";

function App() {
  return (
    <div>
      <Navbar />
      <div className="mt-4 p-2 px-10 w-full flex justify-between">
        <div className="w-1/2 md:w-3/12 flex flex-col md:flex-row gap-x-1">
          <h1 className="text-lg md:text-2xl font-bold p-2">Brackets</h1>
          <div className="flex w-full items-center">
            <HeartIcon className="w-8  m-1 pl-2 text-gray-300" />
            <GlobeAsiaAustraliaIcon className="w-8 border-l m-1 pl-2 text-gray-300" />
            <p className="text-gray-300">Public</p>
            <ServerIcon className="w-8 border-l m-1 pl-2 text-gray-300" />
          </div>
        </div>
        <div className="flex items-end md:items-center  gap-x-2 md:gap-x-4">
          <AvatarGrp />
          <h3 className="text-lg font-semibold">Menu</h3>
        </div>
      </div>
      <KanbanBoard />
    </div>
  );
}

export default App;
