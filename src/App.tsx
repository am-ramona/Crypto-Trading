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
import { routes as appRoutes } from "./routes";
import "./App.css";

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <EscherMenu />
      <Navbar />
      <Routes>
        {appRoutes.map((route) => (
          <Route
            key={route.key}
            path={route.path}
            element={<route.element />}
          />
        ))}
      </Routes>
      <FeedbackComponent className="feedbackStyles">Feedback</FeedbackComponent>
    </Suspense>
  </Router>
);

export default App;
