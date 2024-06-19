import classes from './Checkbox.module.css';
import { FC } from 'react';

interface CheckboxProps {
    onChange: (...event: any[]) => void;
    checked: boolean | undefined;
}

const Checkbox: FC<CheckboxProps> = ({ onChange, checked }) => {
    return (
        <div className={classes.box}>
            <input
                type={'checkbox'}
                className={classes.box}
                content={''}
                onChange={onChange}
                checked={checked}
            ></input>
        </div>
    );
};

export default Checkbox;
