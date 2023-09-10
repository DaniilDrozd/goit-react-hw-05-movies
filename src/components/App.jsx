import { lazy } from "react";
import { BrowserRouter as Router, Route, Routes,Navigate } from "react-router-dom";
import { Layout } from "./Layout/Layout";

const Home = lazy(() => import("./Home/Home"));
const Movies = lazy(() => import("./Movies/Movies")); 
const MovieDetails = lazy(() => import("./MovieDetails/MovieDetails")); 
const Cast = lazy(() => import("./Cast/Cast")); 
const Reviews = lazy(() => import("./Reviews/Reviews")); 

export const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </div>
    </Router> 
  );
};
