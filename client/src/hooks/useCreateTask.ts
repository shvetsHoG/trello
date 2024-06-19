import { useMutation, useQueryClient } from '@tanstack/react-query';
import { TaskService } from '../services/task.service.ts';
import { TypeTaskFormState } from '../types/task.types.ts';

export const useCreateTask = () => {
    const queryClient = useQueryClient();
    const { mutate: createTask } = useMutation({
        mutationKey: ['create task'],
        mutationFn: (data: TypeTaskFormState) => TaskService.createTasks(data),
        onSuccess() {
            queryClient.invalidateQueries({
                queryKey: ['tasks']
            });
        }
    });

    return { createTask };
};
