import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../Components/Home/Home"
import Main from "../core/Main"
import WebDevelopment from "../Components/WebDevelopment/WebDevelopment"
// import MobileDevelopment from "../Components/MobileDevelopment/MobileDevelopment"
import Introduction from "../Components/Slides/Introduction"
import FrontendBasics from "../Components/Slides/FrontendBasics"
import BackendBasics from "../Components/Slides/BackendBasics"
import DatabaseIntegration from "../Components/Slides/DatabaseIntegration"
import MobileDevelopment from "../Components/Slides/MobileDevelopment"
import ModernTooling from "../Components/Slides/ModernTooling"
import RealWorldExample from "../Components/Slides/RealWorldExample"
import CareerPaths from "../Components/Slides/CareerPaths"
import Samples from "../Components/Slides/Samples"
import ScrollToTop from "./ScrollToTop"

export const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
            <ScrollToTop />
                <Routes>
                    <Route element={<Main />}>
                        {/* <Route path='/' element={<Home />} /> */}
                        <Route path="/web-development" element={<WebDevelopment />} />
                        {/* <Route path="/mobile-development" element={<MobileDevelopment />} /> */}
                        <Route path="/" element={<Introduction />} />
          <Route path="/frontend" element={<FrontendBasics />} />
          <Route path="/backend" element={<BackendBasics />} />
          <Route path="/database" element={<DatabaseIntegration />} />
          <Route path="/mobile" element={<MobileDevelopment />} />
          <Route path="/tooling" element={<ModernTooling />} />
          <Route path="/example" element={<RealWorldExample />} />
          <Route path="/careers" element={<CareerPaths />} />
          <Route path="/samples" element={<Samples />} />
                </Route>
            </Routes>
            </BrowserRouter >
</>
 )
}

