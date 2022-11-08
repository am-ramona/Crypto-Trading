import { Suspense, 
        //  lazy 
        } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate,
} from "react-router-dom";
// import 'animate.css/animate.compat.css'
// import { ReactNotifications } from 'react-notifications-component'
// import NoMatch from "./noMatch";
// import logo from './logo.svg';
import Navbar from "./layout/navbar";
import EscherMenu from "./layout/resMenu";
import FeedbackComponent from "./layout/feedback";
// import { Portfolio, Perpetuals, Dashboard, Docs, NotFound } from './pages';
import { routes as appRoutes } from "./routes";
import "./App.css";

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <EscherMenu />
      <Navbar />
      {/* <ReactNotifications /> */}
      <Routes>
        {appRoutes.map((route) => (
          <Route
            key={route.key}
            path={route.path}
            element={<route.element />}
          />
        ))}
      </Routes>
      {/* <Routes>
        <Route path="/" element={ <Navigate to="/portfolio" /> } />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/perpetuals" element={<Perpetuals />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/docs" element={<Docs />} />
        {/* 404 route */}
      {/* <Route path="*" element={<NotFound />} /> */}
      {/* <Route>
            <NoMatch />
          </Route> */}
      {/* </Routes> */}

      {/* <Switch>
        <Route exact path="/" component={Portfolio} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/perpetuals" component={Perpetuals} />
      </Switch> */}
      <FeedbackComponent className="feedbackStyles">Feedback</FeedbackComponent>
    </Suspense>
  </Router>
);

export default App;
