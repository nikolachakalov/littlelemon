
import AppBar from "./AppBar.js";
import BookingPage from "./BookingPage.js";
import Home from "./Home.js";
import { Grommet } from 'grommet';
import "@fontsource/inter/300.css"; // Defaults to weight 400
import { Routes, Route } from 'react-router-dom';



const theme = {
  global: {
    colors: {
      brand: "#F6FBF9",
      margin:"80px"
    },
    font: {
      family: "Inter",
      weight:"medium",
      size: "18px",
      height: "20px",
    }},
    radioButton: {
      border: {
        color: 'black',
        width: '2px',
      },
      hover: {
        border: {
          color: 'black',
        },
      },
      container: {
          color: "black"
      },
      color:"black",
      check: {
        color:"black"
      }},

      header: {
          position: "sticky",
          top: 0,
          overflow: "hidden",
        },

  }


function App() {
  return (

    <Grommet theme={theme} full>
          <AppBar title="Litte Lemon Restaurant" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reservations" element={<BookingPage />} />
          </Routes>
    </Grommet>
  );
}

export default App;
