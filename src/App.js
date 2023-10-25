import "./App.css";
import MainImage from "./components/main-info/MainImage";
import MainInfo from "./components/main-info/MainInfo";
import Destinations from "./components/main-info/Destinations";
import Blogs from "./components/main-info/Blogs";
import Customers from "./components/main-info/Customer";

function App() {
  return (
    <>
      <div className="container">
        <div className="d-flex flex-column" style={{gap: '150px', paddingBottom: '150px'}}>
          <MainImage />
          <MainInfo />
          <Destinations/>
          <Blogs/>
          <Customers/>
        </div>
      </div>
    </>
  );
}

export default App;
