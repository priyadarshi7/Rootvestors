import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import DrawerAppBar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import LoadingPage from "./components/LoadingPage/LoadingPage";
import Newsletter from "./pages/Newsletter/Newsletter";
import Courses from "./pages/Courses/Courses";

export default function App() {
  const [loading, setLoading] = React.useState(true);
  const location = useLocation();

  React.useEffect(() => {
    // Ensure body overflow is hidden during the loading phase
    document.body.style.overflow = "hidden";
    
    // Set loading to true on route change
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "auto";
    }, 4000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, [location.pathname]); // Trigger loading screen on every route change

  React.useEffect(() => {
    // Scroll to top when the route changes
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      {loading && <LoadingPage />}
      <DrawerAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </>
  );
}
