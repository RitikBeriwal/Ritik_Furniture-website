// import { useState } from 'react'

// import './App.css'
// import ProductDetail from './components/ProductDetail';
// import Login from './components/Login';

// function App() {
//   return (
//    <>
//    {/* <ProductDetail/>
//    <Login/> */}
   
// <Routes>
//   <Route path="/login" element={<Login />} />
//   <Route path="/signup" element={<Signup />} />
// </Routes>
   

//    </>
//   )
// }

// export default App;










import { Routes, Route } from "react-router-dom";
// import Login from "./components/Login";
// import Signup from "./components/Signup";
import AuthFlip from "./components/AuthFlip";
import ProductDetailPage from "./components/ProductDetail";

function Home() {
  return <h1>Home Page</h1>;
}

export default function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<Home />} />
    //   <Route path="/login" element={<Login />} />
    //   <Route path="/signup" element={<Signup />} />
    // </Routes>
    // <AuthFlip/>
    // <ProductDetailPage/>
    <AuthFlip/>
  );
}






















