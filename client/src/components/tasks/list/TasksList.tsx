import classes from './TasksList.module.css';
import { DragDropContext } from '@hello-pangea/dnd';
import useTaskDnd from '../../../hooks/useTaskDnd.ts';
import { COLUMNS } from '../columns.data.ts';
import ListRowParent from '../../ui/task/listRowParent/ListRowParent.tsx';
import useTasks from '../../../hooks/useTasks.ts';

const TasksList = () => {
    const { items, setItems } = useTasks();
    const { onDragEnd } = useTaskDnd();

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className={classes.wrapper}>
                <div>Task name</div>
                <div>Due date</div>
                <div>Priority</div>
                <div></div>
            </div>
            <div className={classes.parentsWrapper}>
                {COLUMNS.map(column => (
                    <ListRowParent
                        items={items}
                        label={column.label}
                        value={column.value}
                        setItems={setItems}
                        key={column.value}
                    />
                ))}
            </div>
        </DragDropContext>
    );
};

export default TasksList;
