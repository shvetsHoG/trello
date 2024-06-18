import A from '../../components/ui/link/A.tsx';
import classes from './NotAuthorized.module.css';
const NotAuthorized = () => {
    return (
        <div className={classes.wrapper}>
            <h1 className={classes.mainText}>You are not authorized!</h1>
            <div className={classes.linkWrapper}>
                <A
                    size={'l'}
                    path={'/login'}
                >
                    login
                </A>
                <A
                    size={'l'}
                    path={'/registration'}
                >
                    registration
                </A>
            </div>
        </div>
    );
};

export default NotAuthorized;
