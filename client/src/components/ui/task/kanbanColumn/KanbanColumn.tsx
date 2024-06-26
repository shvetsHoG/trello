import classes from './KanbanColumn.module.css';
import {
    ITaskResponse,
    TypeTaskFormState
} from '../../../../types/task.types.ts';
import { Dispatch, FC, SetStateAction } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTaskDebounce } from '../../../../hooks/useTaskDebounce.ts';
import classNames from 'classnames';
import { GripVertical, Trash2 } from 'lucide-react';
import DatePicker from '../datePicker/DatePicker.tsx';
import SingleSelect from '../singleSelect/SingleSelect.tsx';
import Loader from '../../loader/Loader.tsx';
import { useDeleteTask } from '../../../../hooks/useDeleteTask.ts';
import { TransparentField } from '../transparentField/TransparentField.tsx';
import Checkbox from '../../checkbox/Checkbox.tsx';

interface IListRow {
    item: ITaskResponse;
    setItems: Dispatch<SetStateAction<ITaskResponse[] | undefined>>;
}

const KanbanColumn: FC<IListRow> = ({ item, setItems }) => {
    const { register, control, watch } = useForm<TypeTaskFormState>({
        defaultValues: {
            name: item.name,
            priority: item.priority,
            createdAt: item.createdAt,
            isCompleted: item.isCompleted
        }
    });

    const { deleteTask, isDeletePending } = useDeleteTask();

    useTaskDebounce({ watch, itemId: item.id });

    return (
        <div
            className={classNames(classes.wrapper, {
                [classes.completed]: watch('isCompleted')
            })}
        >
            <div className={classes.first}>
                <button className={classes.dragBtn}>
                    <GripVertical size={28} />
                </button>
                <Controller
                    control={control}
                    name={'isCompleted'}
                    render={({ field: { value, onChange } }) => (
                        <Checkbox
                            onChange={onChange}
                            checked={value}
                        />
                    )}
                />
                <TransparentField {...register('name')} />
            </div>
            <div className={classes.second}>
                <Controller
                    control={control}
                    name={'createdAt'}
                    render={({ field: { value, onChange } }) => (
                        <DatePicker
                            onChange={onChange}
                            value={value || ''}
                        />
                    )}
                />
            </div>
            <div className={classes.third}>
                <Controller
                    control={control}
                    name={'priority'}
                    render={({ field: { value, onChange } }) => (
                        <SingleSelect
                            data={['high', 'medium', 'low'].map(item => ({
                                value: item,
                                label: item
                            }))}
                            onChange={onChange}
                            value={value || ''}
                            kanban={true}
                        />
                    )}
                />
            </div>
            <div className={classes.last}>
                <button
                    onClick={() =>
                        item.id
                            ? deleteTask(item.id)
                            : setItems(prev => prev?.slice(0, -1))
                    }
                    className={classes.deleteBtn}
                >
                    {isDeletePending ? <Loader /> : <Trash2 />}
                </button>
            </div>
        </div>
    );
};

export default KanbanColumn;
