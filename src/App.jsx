import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/home/HomePage";
import EmployerPage from "./pages/Employers/EmployerPage";
import ApplicentPage from "./pages/applicent/ApplicentPage";
import AboutPage from "./pages/about/AboutPage";
import CareerPage from "./pages/career/CareerPage";
import ScrollToTop from "./components/ScrollToTop";
import NotFoundPage from "./components/NotFoundPage";
import Blogs from "./pages/blog/Blogs";
import BlogDetails from "./pages/blog/BlogDetails";
import Services from "./pages/services/Services";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="employers" element={<EmployerPage />} />
            <Route path="applicants" element={<ApplicentPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="career" element={<CareerPage />} />
            <Route path="services" element={<Services />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
