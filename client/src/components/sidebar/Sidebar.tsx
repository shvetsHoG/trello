import classes from './Sidebar.module.css';
import MenuItem from '../ui/menuItem/MenuItem.tsx';
import { Menu } from './menu.data.ts';
import { Cat } from 'lucide-react';

const Sidebar = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.header}>
                <Cat
                    fill={'#e4aa72'}
                    size={40}
                />
                <span>Persik</span>
            </div>
            <div className={classes.itemsWrapper}>
                {Menu.map(item => (
                    <MenuItem
                        link={item.link}
                        name={item.name}
                        icon={item.icon}
                    />
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
