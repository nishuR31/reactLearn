import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { memo, Suspense, lazy } from "react";
import Loader from "./components/loader";
import { HomeLayout, ErrorLayout } from "./layout";
import "./index.css";

const Home = lazy(() => import("./pages/home"));
const Components = lazy(() => import("./pages/components"));
const Hooks = lazy(() => import("./pages/hooks"));
const Modules = lazy(() => import("./pages/modules"));
const Error = lazy(() => import("./pages/error"));
const Learn = lazy(() => import("./pages/learn"));

const App = memo(() => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<HomeLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/components" element={<Components />} />
            <Route path="/hooks" element={<Hooks />} />
            <Route path="/modules" element={<Modules />} />
            <Route path="/learn" element={<Learn />} />
          </Route>

          <Route element={<ErrorLayout />}>
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
});

export default App;
