import "./App.css";
import NavBar from "./NavBar.jsx";
import Header from "./Header.jsx";
import MementoBodyContent from "./MementoBodyContent.jsx";
import MementoRecommendations from "./MementoRecommendations.jsx";


export default function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <MementoBodyContent />
      <MementoRecommendations />
    </div>
  );
}
