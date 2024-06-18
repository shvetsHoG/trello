import classes from './PageWrapper.module.css';
import Sidebar from '../sidebar/Sidebar.tsx';
import Header from '../header/Header.tsx';
import { FC, ReactElement } from 'react';
import { Toaster } from 'sonner';

interface PageWrapperProps {
    title: string;
    children?: ReactElement;
}

const PageWrapper: FC<PageWrapperProps> = ({ children, title }) => {
    return (
        <div className={classes.wrapper}>
            <Sidebar />
            <div className={classes.main}>
                <Header title={title} />
                {children}
            </div>
            <Toaster
                richColors
                position='bottom-right'
            />
        </div>
    );
};

export default PageWrapper;
