import { LoaderCircle } from 'lucide-react';
import classes from './Loader.module.css';

const Loader = () => {
    return <LoaderCircle className={classes.loader}></LoaderCircle>;
};

export default Loader;
