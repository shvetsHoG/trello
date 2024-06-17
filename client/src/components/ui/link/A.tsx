import classes from './A.module.css';
import { Link } from 'react-router-dom';
import { FC } from 'react';
import classNames from 'classnames';

interface LinkProps {
    path: string;
    children?: string;
    size?: string;
}

const A: FC<LinkProps> = ({ path, children, size }) => {
    return (
        <Link
            className={classNames(classes.link, {
                [classes.small]: size === 's',
                [classes.medium]: size === 'm',
                [classes.large]: size === 'l'
            })}
            to={path}
        >
            {children}
        </Link>
    );
};

export default A;
