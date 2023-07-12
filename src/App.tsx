import "./App.css";
import CategoryMenu from "./Components/CategoryMenu";
import Header from "./Components/Header";
import MainComponent from "./Components/MainComponent";
function App() {
  return (
    <div className="estore">
      <Header />
      <CategoryMenu />
      <MainComponent />
    </div>
  );
}

export default App;
