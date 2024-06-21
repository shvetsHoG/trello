import useTasks from '../../../hooks/useTasks.ts';
import useTaskDnd from '../../../hooks/useTaskDnd.ts';
import { DragDropContext } from '@hello-pangea/dnd';
import classes from './TasksKanban.module.css';
import { COLUMNS } from '../columns.data.ts';
import KanbanColumnParent from '../../ui/task/kanbanColumnParent/KanbanColumnParent.tsx';

const TasksKanban = () => {
    const { items, setItems } = useTasks();
    const { onDragEnd } = useTaskDnd();

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className={classes.parentsWrapper}>
                {COLUMNS.map(column => (
                    <KanbanColumnParent
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

export default TasksKanban;
