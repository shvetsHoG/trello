import PageWrapper from '../../components/wrapper/PageWrapper.tsx';
import TasksView from '../../components/tasks/TasksView.tsx';

const TasksPage = () => {
    return (
        <>
            <PageWrapper title={'Tasks'}>
                <TasksView />
            </PageWrapper>
        </>
    );
};

export default TasksPage;
