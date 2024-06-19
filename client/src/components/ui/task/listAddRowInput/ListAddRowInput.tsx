import classes from './ListAddRowInput.module.css';
import { Dispatch, FC, SetStateAction } from 'react';
import { ITaskResponse } from '../../../../types/task.types.ts';
import Button from '../../button/Button.tsx';

interface IListAddRowInput {
    filterDate?: string;
    setItems: Dispatch<SetStateAction<ITaskResponse[] | undefined>>;
}

const ListAddRowInput: FC<IListAddRowInput> = ({ filterDate, setItems }) => {
    const addRow = () => {
        setItems(prev => {
            if (!prev) return;

            return [
                ...prev,
                { id: '', name: '', isCompleted: false, createdAt: filterDate }
            ];
        });
    };

    return (
        <div className={classes.wrapper}>
            <Button
                type={'black'}
                onClick={addRow}
            >
                Add task
            </Button>
        </div>
    );
};

export default ListAddRowInput;
