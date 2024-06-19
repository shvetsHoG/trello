import { useQuery } from '@tanstack/react-query';
import { TaskService } from '../services/task.service.ts';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTasks } from '../store/reducers/TasksSlice.ts';

const useTasks = () => {
    const dispatch = useDispatch();

    const { data, isPending } = useQuery({
        queryKey: ['tasks'],
        queryFn: () => TaskService.getTasks()
    });

    useEffect(() => {
        dispatch(setTasks(data?.data));
    }, [data?.data]);

    return { data, isPending };
};
export default useTasks;
