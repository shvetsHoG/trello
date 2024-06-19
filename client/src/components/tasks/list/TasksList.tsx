import classes from './TasksList.module.css';
import { DragDropContext } from '@hello-pangea/dnd';
import useTaskDnd from '../../../hooks/useTaskDnd.ts';
import { COLUMNS } from '../columns.data.ts';
import ListRowParent from '../../ui/task/listRowParent/ListRowParent.tsx';
import useTasks from '../../../hooks/useTasks.ts';
import Span from '../../ui/span/Span.tsx';

const TasksList = () => {
    const { items, setItems } = useTasks();
    const { onDragEnd } = useTaskDnd();

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className={classes.wrapper}>
                <div className={classes.name}>
                    <Span>Task name</Span>
                </div>
                <div className={classes.date}>
                    <Span>Due date</Span>
                </div>
                <div className={classes.priority}>
                    <Span>Priority</Span>
                </div>
                <div className={classes.trash}></div>
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
