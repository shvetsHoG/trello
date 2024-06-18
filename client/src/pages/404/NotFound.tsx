import classes from './NotFound.module.css';
import A from '../../components/ui/link/A.tsx';
import Span from '../../components/ui/span/Span.tsx';

const NotFound = () => {
    return (
        <div className={classes.wrapper}>
            <h1 className={classes.mainText}>Oops!</h1>
            <Span
                weight={'bold'}
                size={'m'}
            >
                The page you are looking for are not found
            </Span>
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
                <A
                    size={'l'}
                    path={'/'}
                >
                    home
                </A>
            </div>
        </div>
    );
};

export default NotFound;
