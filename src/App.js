import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
// Type search
import HotelType from "./components/typeSearch/HotelType";
import HotelList from "./pages/typelist/HotelList";
import ApartmentType from "./components/typeSearch/ApartmentType";
import ResortsType from "./components/typeSearch/ResortsType";
import VillasType from "./components/typeSearch/VillasType";
import ApartmentList from "./pages/typelist/ApartmentList";
import VillasList from "./pages/typelist/VillasList";
import ResortsList from "./pages/typelist/ResortsList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>

        <Route path="/typehotellist" element={<HotelList/>} />
        <Route path="/typeapartmentlist" element={<ApartmentList/>} />
        <Route path="/typevillaslist" element={<VillasList/>} />
        <Route path="/typeresortslist" element={<ResortsList/>} />

        <Route path="/allhotels" element={<HotelType/>} />
        <Route path="/allapartments" element={<ApartmentType/>} />
        <Route path="/allresorts" element={<ResortsType/>} />
        <Route path="/allvillas" element={<VillasType/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
