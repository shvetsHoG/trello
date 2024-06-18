import classes from './Header.module.css';
import { FC } from 'react';
import classNames from 'classnames';

interface HeaderProps {
    title?: string;
    color?: string;
}

const Header: FC<HeaderProps> = ({ title, color }) => {
    return (
        <div className={classes.wrapper}>
            <div
                className={classNames(classes.content, {
                    [classes.black]: color === 'black',
                    [classes.white]: color === 'white'
                })}
            >
                {title}
            </div>
        </div>
    );
};

export default Header;
