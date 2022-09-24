import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  NavBar  from "./components/navbar/navbar.component";
import LandingPage from "./components/landing-page/landing-page.component";
import  Skills  from "./components/skills/skills.component";
import  Projects  from "./components/side-projects/side-projects.components";
import  Footer from "./components/footer/footer.component";

function App() {
  return (
    <div className="App">
      <NavBar />
      <LandingPage />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
