import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { memo } from "react";
import { ErrorPage } from "./pages/error";
import { Home, About, Members, Skills } from "./pages/home";
import { Signin, Signup, Forgot, TwoFA, Cache } from "./pages/auth";
import { Contact, Privacy, Faqs, Uptime } from "./pages/form";
import { HomeLayout, FormLayout, AuthLayout, ErrorLayout } from "./layout";
import "./index.css";
const App = memo(() => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<HomeLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/members" element={<Members />} />
            <Route path="/skills" element={<Skills />} />
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
      </Router>
    </>
  );
});

export default App;
