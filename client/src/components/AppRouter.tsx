import { Route, Routes } from 'react-router-dom';
import AuthPage from '../pages/authPage/AuthPage.tsx';

const AppRouter = () => {
    return (
        <Routes>
            <Route
                path={'*'}
                element={<AuthPage />}
            ></Route>
        </Routes>
    );
};

export default AppRouter;
