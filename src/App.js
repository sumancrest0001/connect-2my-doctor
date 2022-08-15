import './styles/App.scss';
import TopNav from './components/TopNav';
import Footer from './components/Footer';
import MainSection from './components/MainSection';

function App() {
  return (
    <div className="App">
     <TopNav />
     <MainSection />
     <Footer />
    </div>
  );
}

export default App;
