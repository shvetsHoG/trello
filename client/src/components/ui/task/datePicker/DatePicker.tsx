import classes from './DatePicker.module.css';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { FC, useState } from 'react';
import { DayPicker, SelectSingleEventHandler } from 'react-day-picker';
import Exit from '../../exit/Exit.tsx';
import { useOutside } from '../../../../hooks/useOutside.ts';
import 'react-day-picker/dist/style.css';

dayjs.extend(localizedFormat);

interface IDatePicker {
    onChange: (value: string) => void;
    value: string;
    position?: 'left' | 'right';
}

const DatePicker: FC<IDatePicker> = ({ onChange, value }) => {
    const [selected, setSelected] = useState<Date>();
    const { isShow, setIsShow, ref } = useOutside(false);

    const handleDaySelect: SelectSingleEventHandler = date => {
        const ISOdate = date?.toISOString();
        setSelected(date);

        if (ISOdate) {
            onChange(ISOdate);
            setIsShow(false);
        } else {
            onChange('');
        }
    };

    return (
        <div
            className={classes.wrapper}
            ref={ref}
        >
            <button
                onClick={() => setIsShow(!isShow)}
                className={classes.date}
            >
                {value ? dayjs(value).format('LL') : 'Click for select'}
            </button>
            {value && (
                <button
                    onClick={() => onChange('')}
                    className={classes.exit}
                >
                    <Exit size={18} />
                </button>
            )}
            {isShow && (
                <div className={classes.dpWrapper}>
                    <DayPicker
                        className={classes.rdp}
                        fromYear={2024}
                        toYear={2054}
                        initialFocus={isShow}
                        mode={'single'}
                        defaultMonth={selected}
                        selected={selected}
                        onSelect={handleDaySelect}
                        weekStartsOn={1}
                    />
                </div>
            )}
        </div>
    );
};

export default DatePicker;
