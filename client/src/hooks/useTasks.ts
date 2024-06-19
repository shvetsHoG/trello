import { useQuery } from '@tanstack/react-query';
import { TaskService } from '../services/task.service.ts';
import { useEffect, useState } from 'react';
import { ITaskResponse } from '../types/task.types.ts';

const useTasks = () => {
    const { data } = useQuery({
        queryKey: ['tasks'],
        queryFn: () => TaskService.getTasks()
    });

    const [items, setItems] = useState<ITaskResponse[] | undefined>(data?.data);

    useEffect(() => {
        setItems(data?.data);
    }, [data?.data]);

    return { items, setItems };
};
export default useTasks;
