import './App.css';
import Header from './Components/Header';
import Welcome from './Components/Welcome';
import ProfileCard from './Components/ProfileCard';
import { LearningGoals } from './Components/LearningGoals';
import { Footer } from './Components/Footer';
function App() {
  return (
    <div className="app-container">
      <Header />
      <Welcome />
      <ProfileCard />
      <LearningGoals />
      <Footer />
    </div>
  );
}

export default App;
