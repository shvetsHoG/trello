import TasksList from './list/TasksList.tsx';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../store';
import TasksKanban from './kanban/TasksKanban.tsx';
import Span from '../ui/span/Span.tsx';
import classes from './TasksView.module.css';
import { setView } from '../../store/reducers/ViewSlice.ts';
import { ChangeEvent } from 'react';

const TasksView = () => {
    const isList = useSelector<IRootState>(state => state.view.isList);
    const dispatch = useDispatch();

    const changeView = (e: ChangeEvent<HTMLSpanElement>) => {
        const id = e.target.id;
        if (id === 'List') {
            dispatch(setView(true));
        } else {
            dispatch(setView(false));
        }
    };
    return (
        <>
            <div className={classes.spanWrapper}>
                <Span
                    size={'m'}
                    style={{ cursor: 'pointer' }}
                    chosen={!!isList}
                    id={'List'}
                    onClick={e => changeView(e)}
                >
                    List
                </Span>
                <Span
                    size={'m'}
                    style={{ cursor: 'pointer' }}
                    chosen={!isList}
                    id={'Kanban'}
                    onClick={e => changeView(e)}
                >
                    Board
                </Span>
            </div>
            {isList ? <TasksList /> : <TasksKanban />}
        </>
    );
};

export default TasksView;
