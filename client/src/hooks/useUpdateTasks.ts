import { useMutation, useQueryClient } from '@tanstack/react-query';
import { TypeTaskFormState } from '../types/task.types.ts';
import { TaskService } from '../services/task.service.ts';

const useUpdateTasks = (key?: string) => {
    const queryClient = useQueryClient();

    const { mutate: updateTask } = useMutation({
        mutationKey: ['update task', key],
        mutationFn: ({ id, data }: { id: string; data: TypeTaskFormState }) =>
            TaskService.updateTasks(id, data),
        onSuccess() {
            queryClient.invalidateQueries({
                queryKey: ['tasks']
            });
        }
    });

    return { updateTask };
};

export default useUpdateTasks;
