import classes from './A.module.css';
import { Link } from 'react-router-dom';
import { FC } from 'react';

interface LinkProps {
    path: string;
    children?: string;
}

const A: FC<LinkProps> = ({ path, children }) => {
    return (
        <Link
            className={classes.link}
            to={path}
        >
            {children}
        </Link>
    );
};

export default A;
