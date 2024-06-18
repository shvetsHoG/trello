import classes from './Block.module.css';
import { FC } from 'react';
import Span from '../span/Span.tsx';
import classNames from 'classnames';

interface BlockProps {
    label: string;
    value: string;
    color?: string;
}

const Block: FC<BlockProps> = ({ label, value, color }) => {
    return (
        <div
            className={classNames(classes.block, {
                [classes.inherit]: color === 'white',
                [classes.black]: color === 'black',
                [classes.pink]: color === 'pink'
            })}
        >
            <Span
                color={color}
                size={'s'}
            >
                {label}
            </Span>
            <Span
                color={color}
                size={'m'}
            >
                {value}
            </Span>
        </div>
    );
};

export default Block;
