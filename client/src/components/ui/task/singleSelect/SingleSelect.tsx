import { FC } from 'react';
import { useOutside } from '../../../../hooks/useOutside.ts';
import Span from '../../span/Span.tsx';
import Exit from '../../exit/Exit.tsx';

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
                    setIsShow(false);
                }}
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
                    }}
                >
                    <Exit size={14} />
                </button>
            )}
            {isShow && (
                <div>
                    {data.map(item => (
                        <button
                            key={item.value}
                            onClick={e => {
                                e.preventDefault();
                                onChange(item.value);
                                setIsShow(false);
                            }}
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
