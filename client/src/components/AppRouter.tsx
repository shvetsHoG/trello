import { Route, Routes } from 'react-router-dom';
import AuthPage from '../pages/authPage/AuthPage.tsx';
import MainPage from '../pages/mainPage/MainPage.tsx';
import { authService } from '../services/auth.service.ts';
import { useEffect } from 'react';
import NotAuthorized from '../pages/404/NotAuthorized.tsx';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from '../store/reducers/AuthSlice.ts';
import { IRootState } from '../store';
import { setLoading } from '../store/reducers/LoadingSlice.ts';
import Loader from './ui/loader/Loader.tsx';

const AppRouter = () => {
    const isAuth = useSelector<IRootState>(state => state.auth.isAuth);
    const isLoading = useSelector<IRootState>(state => state.loading.isLoading);
    const dispatch = useDispatch();

    const checkAuth = async () => {
        return await authService.getNewTokens();
    };

    useEffect(() => {
        dispatch(setLoading(true));

        checkAuth()
            .then(response =>
                response?.data.accessToken
                    ? dispatch(setAuth(true))
                    : dispatch(setAuth(false))
            )
            .then(() => dispatch(setLoading(false)));
    }, [isAuth]);

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : isAuth ? (
                <Routes>
                    <Route
                        path={'*'}
                        element={<MainPage />}
                    />
                    <Route
                        path={'/registration'}
                        element={<AuthPage />}
                    />
                    <Route
                        path={'/login'}
                        element={<AuthPage />}
                    />
                </Routes>
            ) : (
                <Routes>
                    <Route
                        path={'*'}
                        element={<NotAuthorized />}
                    ></Route>
                    <Route
                        path={'/registration'}
                        element={<AuthPage />}
                    />
                    <Route
                        path={'/login'}
                        element={<AuthPage />}
                    />
                </Routes>
            )}
        </>
    );
};

export default AppRouter;
