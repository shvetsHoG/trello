import { FC } from 'react';
import { useOutside } from '../../../../hooks/useOutside.ts';
import Span from '../../span/Span.tsx';
import Exit from '../../exit/Exit.tsx';
import classes from './SingleSelect.module.css';

export interface IOption {
    label: string;
    value: string;
}

interface ISingleSelect {
    data: IOption[];
    onChange: (value: string) => void;
    value: string;
    isColorSelected?: boolean;
}

const SingleSelect: FC<ISingleSelect> = ({ data, value, onChange }) => {
    const { ref, isShow, setIsShow } = useOutside(false);
    const getValue = () => data.find(item => item.value === value)?.value;

    return (
        <div ref={ref}>
            <button
                onClick={e => {
                    e.preventDefault();
                    setIsShow(!isShow);
                }}
                className={classes.btn}
            >
                {getValue() ? (
                    <Span>{getValue()}</Span>
                ) : (
                    <Span>Click for select</Span>
                )}
            </button>
            {value && (
                <button
                    onClick={e => {
                        e.preventDefault();
                        onChange('');
                        console.log(isShow);
                    }}
                    className={classes.exit}
                >
                    <Exit size={18} />
                </button>
            )}
            {isShow && (
                <div className={classes.btnWrapper}>
                    {data.map(item => (
                        <button
                            key={item.value}
                            onClick={e => {
                                e.preventDefault();
                                onChange(item.value);
                                setIsShow(false);
                            }}
                            className={classes.btn}
                        >
                            <Span>{item.label}</Span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SingleSelect;
