import useUpdateTasks from './useUpdateTasks.ts';
import { DropResult } from '@hello-pangea/dnd';
import { FILTERS } from '../components/tasks/columns.data.ts';

const useTaskDnd = () => {
    const { updateTask } = useUpdateTasks();

    const onDragEnd = (result: DropResult) => {
        if (!result.destination) return;

        const destinationColumnId = result.destination.droppableId;

        if (destinationColumnId === result.source.droppableId) return;

        if (destinationColumnId === 'completed') {
            updateTask({
                id: result.draggableId,
                data: {
                    isCompleted: true
                }
            });

            return;
        }

        const newCreatedAt = FILTERS[destinationColumnId].format();
        updateTask({
            id: result.draggableId,
            data: {
                createdAt: newCreatedAt,
                isCompleted: false
            }
        });
    };

    return { onDragEnd };
};

export default useTaskDnd;
