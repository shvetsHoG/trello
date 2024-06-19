import { useMutation, useQueryClient } from '@tanstack/react-query';
import { TaskService } from '../services/task.service.ts';

export const useDeleteTask = () => {
    const queryClient = useQueryClient();
    const { mutate: deleteTask, isPending: isDeletePending } = useMutation({
        mutationKey: ['delete task'],
        mutationFn: (id: string) => TaskService.deleteTasks(id),
        onSuccess() {
            queryClient.invalidateQueries({
                queryKey: ['tasks']
            });
        }
    });

    return { deleteTask, isDeletePending };
};
