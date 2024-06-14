import { FC } from 'react';
import classes from './Span.module.css';

interface SpanProps {
    children?: string;
    weight?: string;
}

const Span: FC<SpanProps> = ({ weight, children }) => {
    return (
        <span
            style={
                weight === 'bold'
                    ? { fontWeight: 'bold' }
                    : { fontWeight: 'inherit' }
            }
            className={classes.span}
        >
            {children}
        </span>
    );
};

export default Span;
