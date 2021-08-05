import { TopBar } from './components/TopBar/TopBar';
import { LandingSection } from './components/Landing/Landing';
import { AboutSection } from './components/About/About';
import { RoadMap } from './components/RoadMap/RoadMap';
import { Projects } from './components/Projects/Projects';
import { Footer } from './components/Footer/Footer';

function App() {
    return (
        <div className="App">
            <TopBar />
            <LandingSection />
            <AboutSection />
            <RoadMap />
            <Projects />
            <Footer />
        </div>
    );
}

export default App;
