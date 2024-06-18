import classes from './Block.module.css';
import { FC } from 'react';
import Span from '../span/Span.tsx';

interface BlockProps {
    label: string;
    value: string;
}

const Block: FC<BlockProps> = ({ label, value }) => {
    return (
        <div className={classes.block}>
            <Span
                color={'white'}
                size={'s'}
            >
                {label}
            </Span>
            <Span
                color={'white'}
                size={'m'}
            >
                {value}
            </Span>
        </div>
    );
};

export default Block;
