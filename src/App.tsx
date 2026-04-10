import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { memo, Suspense, lazy } from "react";
import Loader from "./components/loader";
import { HomeLayout, FormLayout, AuthLayout, ErrorLayout } from "./layout";
import "./index.css";

// 🔥 HOME GROUP
const Home = lazy(() =>
  import("./pages/home").then((m) => ({ default: m.Home }))
);
const About = lazy(() =>
  import("./pages/home").then((m) => ({ default: m.About }))
);
const Members = lazy(() =>
  import("./pages/home").then((m) => ({ default: m.Members }))
);
const Skills = lazy(() =>
  import("./pages/home").then((m) => ({ default: m.Skills }))
);
const Learn = lazy(() =>
  import("./pages/home").then((m)=>({default:m.Learn})))

// 🔥 AUTH GROUP
const Signin = lazy(() =>
  import("./pages/auth").then((m) => ({ default: m.Signin }))
);
const Signup = lazy(() =>
  import("./pages/auth").then((m) => ({ default: m.Signup }))
);
const Forgot = lazy(() =>
  import("./pages/auth").then((m) => ({ default: m.Forgot }))
);
const TwoFA = lazy(() =>
  import("./pages/auth").then((m) => ({ default: m.TwoFA }))
);
const Cache = lazy(() =>
  import("./pages/auth").then((m) => ({ default: m.Cache }))
);

// 🔥 FORM GROUP
const Contact = lazy(() =>
  import("./pages/form").then((m) => ({ default: m.Contact }))
);
const Privacy = lazy(() =>
  import("./pages/form").then((m) => ({ default: m.Privacy }))
);
const Faqs = lazy(() =>
  import("./pages/form").then((m) => ({ default: m.Faqs }))
);
const Uptime = lazy(() =>
  import("./pages/form").then((m) => ({ default: m.Uptime }))
);

// 🔥 ERROR
const ErrorPage = lazy(() =>
  import("./pages/error").then((m) => ({ default: m.ErrorPage }))
);

const App = memo(() => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<HomeLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/members" element={<Members />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/learn" element={<Learn />} />
          </Route>

          <Route element={<FormLayout />}>
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/uptime" element={<Uptime />} />
          </Route>

          <Route element={<AuthLayout />}>
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot" element={<Forgot />} />
            <Route path="/two-factor" element={<TwoFA />} />
            <Route path="/cache" element={<Cache />} />
          </Route>

          <Route element={<ErrorLayout />}>
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
});

export default App;