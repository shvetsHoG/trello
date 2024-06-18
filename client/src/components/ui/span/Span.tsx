import { FC } from 'react';
import classes from './Span.module.css';
import classNames from 'classnames';

interface SpanProps {
    children?: string;
    weight?: string;
    size?: string;
    color?: string;
}

const Span: FC<SpanProps> = ({ weight, size, color, children }) => {
    return (
        <span
            className={classNames(
                classes.span,
                {
                    [classes.inherit]: weight === 'inherit',
                    [classes.bold]: weight === 'bold',
                    [classes.light]: weight === 'light'
                },
                {
                    [classes.small]: size === 's',
                    [classes.medium]: size === 'm',
                    [classes.large]: size === 'l'
                },
                {
                    [classes.white]: color === 'white',
                    [classes.black]: color === 'black'
                }
            )}
        >
            {children}
        </span>
    );
};

export default Span;
