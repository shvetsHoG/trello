import Header from '../../components/header/Header.tsx';
import Statistics from '../../components/statistics/Statistics.tsx';
import Sidebar from '../../components/sidebar/Sidebar.tsx';
import classes from './MainPage.module.css';

const MainPage = () => {
    return (
        <>
            <div className={classes.wrapper}>
                <Sidebar />
                <div className={classes.main}>
                    <Header title={'Statistics'} />
                    <Statistics />
                </div>
            </div>
        </>
    );
};

export default MainPage;
