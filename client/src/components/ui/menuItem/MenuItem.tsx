import classes from './MenuItem.module.css';
import { FC } from 'react';
import { IMenu } from '../../sidebar/menu.data.ts';
import { Link } from 'react-router-dom';

const MenuItem: FC<IMenu> = ({ link, name, icon: Icon }) => {
    return (
        <div className={classes.wrapper}>
            <Icon className={classes.icon} />
            <Link
                to={link}
                className={classes.link}
            >
                {name}
            </Link>
        </div>
    );
};

export default MenuItem;
