import Header from './components/Header/Header';
import Title from './containers/Title/Title';
import About from './containers/About/About';
import Skills from './containers/Skills/Skills';
import Projects from './containers/Projects/Projects';
import Footer from './components/Footer/Footer';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <Title />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
