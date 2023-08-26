import NavbarComponent from "./components/NavbarComponents";
import ConnectBlock from "./components/connectBlock";
import FeatureBlock from "./components/featureBlock";
import FirstBlockCompo from "./components/firstBlockCompo";
import NavbarMain from "./components/navbarMain";
import GridComp from "./components/gridComp";

function App() {
  return (
    <div>
      <NavbarComponent />
      <NavbarMain />
      <FirstBlockCompo />
      <FeatureBlock />
      <ConnectBlock />
      <GridComp />
    </div>
  );
}

export default App;
