import LandingPage from "./pages/LandingPage";
import { Route, Routes} from 'react-router-dom';
import  Discover  from "./pages/TestDiscoverPage";

function App() {
  return (
    <>
    {/* Routes for testing  */}
     <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/Discover" element={<Discover />}></Route>
      </Routes>
    </>
  );
}

export default App;
