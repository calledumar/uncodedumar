import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Myself from "./components/Myself";
import Qualification from "./components/Qualification";
import Quotation from "./components/Quotation";
import Videos from "./components/Videos";
import Projects from "./components/Projects";
import Birclix from "./components/Birclix";
import ProjectDisplay from "./components/projectsdisplay";
import Quotation2 from "./components/Quotation2";
import Technologies from "./components/Technologies";
import TechIcons from "./components/TechIcons";
import Genai from "./components/GenAi";
import Genai2 from "./components/GenAi2";
import Contact from "./components/Contact";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or actual data fetching
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Show loader for 2 seconds
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <StrictMode>
      <Navbar />
      <Header />
      <Myself />
      <Qualification />
      <Quotation />
      <Videos />
      <Birclix />
      <Projects />
      <ProjectDisplay />
      <Quotation2 />
      <Technologies />
      <TechIcons />
      <Genai />
      <Genai2 />
      <Contact />
      <ContactForm />
      <Footer />
    </StrictMode>
  );
};

// Render the App component to the DOM
const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);
