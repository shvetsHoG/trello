import classes from './Header.module.css';
import { FC } from 'react';
import classNames from 'classnames';
import useProfile from '../../hooks/useProfile.ts';
import { LogOut } from 'lucide-react';
import { authService } from '../../services/auth.service.ts';
import { useDispatch } from 'react-redux';
import { setAuth } from '../../store/reducers/AuthSlice.ts';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
    title?: string;
    color?: string;
}

const Header: FC<HeaderProps> = ({ title, color }) => {
    const { data } = useProfile();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logOut = async () => {
        await authService.logout();
        dispatch(setAuth(false));
        navigate('/login');
    };

    return (
        <div className={classes.wrapper}>
            <div
                className={classNames(classes.content, {
                    [classes.black]: color === 'black',
                    [classes.white]: color === 'white'
                })}
            >
                <div>{title}</div>
                <div className={classes.profile}>
                    <div className={classes.initialsWrapper}>
                        <span style={{ fontWeight: 'bold' }}>
                            {data?.user.email || 'mail@mail.com'}
                        </span>
                        <span>{data?.user.name || 'Anonim'}</span>
                    </div>
                    <div className={classes.avatarWrapper}>
                        {data?.user.name?.charAt(0).toUpperCase() || 'A'}
                    </div>
                    <button
                        className={classes.logoutBtn}
                        onClick={() => logOut()}
                    >
                        <LogOut size={28} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
