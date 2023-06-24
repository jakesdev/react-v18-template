import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DocumentationLayout from "./layouts/DocumentationLayout";
import "./App.css";
import IntroductionPage from "./pages/Documentation/Introduction";
import ChangelogPage from "./pages/Documentation/Changelog";
import AboutCreditPage from "./pages/Documentation/AboutCredits";
import ComponentsPage from "./pages/Components";
import AccordionPage from "./pages/Components/Accordion";
import AlertPage from "./pages/Components/Alert";
import AspectRatioPage from "./pages/Components/AspectRatio";
import AlertDialogPage from "./pages/Components/AlertDialog";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/documentation" element={<DocumentationLayout />}>
          <Route index element={<IntroductionPage />} />
          <Route path="introduction" element={<IntroductionPage />} />
          <Route path="changelog" element={<ChangelogPage />} />
          <Route path="about" element={<AboutCreditPage />} />
        </Route>
        <Route path="/components" element={<DocumentationLayout />}>
          <Route index element={<ComponentsPage />} />
          <Route path="accordion" element={<AccordionPage />} />
          <Route path="alert" element={<AlertPage />} />
          <Route path="alert-dialog" element={<AlertDialogPage />} />
          <Route path="aspect-ratio" element={<AspectRatioPage />} />
          {
            // add more here
          }
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
