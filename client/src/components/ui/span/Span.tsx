import { FC } from 'react';
import classes from './Span.module.css';
import classNames from 'classnames';

interface SpanProps {
    children?: string;
    weight?: string;
    size?: string;
    color?: string;
    style?: IStyle;
    chosen?: boolean;
    onClick?: (e: never) => void;
    id?: string;
}

interface IStyle {
    cursor?: string;
}

const Span: FC<SpanProps> = ({
    weight,
    size,
    color,
    chosen,
    children,
    style,
    onClick,
    id
}) => {
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
                    [classes.black]: color === 'black',
                    [classes.pink]: color === 'pink'
                },
                {
                    [classes.chosen]: chosen === true,
                    [classes.unchosen]: chosen === false
                }
            )}
            style={style}
            onClick={onClick}
            id={id}
        >
            {children}
        </span>
    );
};

export default Span;
