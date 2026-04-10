import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { memo } from "react";

import { Home, About, Members, Skills } from "./pages/home/index.tsx";

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
            <Route path="/two-factor" element={<twoFA />} />
            <Route path="/cache" element={<Cache />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
});

export default App;
