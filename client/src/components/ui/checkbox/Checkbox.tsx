import classes from './Checkbox.module.css';
import { FC } from 'react';

interface CheckboxProps {
    onChange: (...event: any[]) => void;
    checked: boolean | undefined;
}

const Checkbox: FC<CheckboxProps> = ({ onChange, checked }) => {
    return (
        <input
            type={'checkbox'}
            className={classes.box}
            onChange={onChange}
            checked={checked}
        ></input>
    );
};

export default Checkbox;
