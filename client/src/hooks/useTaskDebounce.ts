import { useCallback, useEffect } from 'react';
import { TypeTaskFormState } from '../types/task.types.ts';
import useUpdateTasks from './useUpdateTasks.ts';
import { useCreateTask } from './useCreateTask.ts';
import { UseFormWatch } from 'react-hook-form';
import debounce from 'lodash.debounce';

interface IUseTaskDebounce {
    watch: UseFormWatch<Partial<TypeTaskFormState>>;
    itemId: string;
}

export const useTaskDebounce = ({ watch, itemId }: IUseTaskDebounce) => {
    const { updateTask } = useUpdateTasks();
    const { createTask } = useCreateTask();

    const debounceCreateTask = useCallback(
        debounce((formData: TypeTaskFormState) => {
            createTask(formData);
        }, 400),
        []
    );

    const debounceUpdateTask = useCallback(
        debounce((formData: TypeTaskFormState) => {
            updateTask({ id: itemId, data: formData });
        }, 400),
        []
    );

    useEffect(() => {
        const { unsubscribe } = watch(formData => {
            if (itemId) {
                debounceUpdateTask({
                    ...formData,
                    priority: formData.priority || undefined
                });
            } else {
                debounceCreateTask(formData);
            }
        });

        return () => {
            unsubscribe();
        };
    }, [watch(), debounceUpdateTask, debounceCreateTask]);
};
