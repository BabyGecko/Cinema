import { Routes, Route } from 'react-router-dom'
import Movie from "../pages/Movie/Movie"
import Seats from "../pages/Seats/Seats"

const AppRouter = () => {
    return (
        <Routes>
            {/* <Route path="*" element={<Movie />} /> */}
            <Route path="/Movie" element={<Movie />} />
            <Route path="/Seats" element={<Seats />} />
        </Routes>
    );
};

export default AppRouter;