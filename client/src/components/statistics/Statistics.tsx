import classes from './Statistics.module.css';
import useProfile from '../../hooks/UseProfile.tsx';
import Loader from '../ui/loader/Loader.tsx';
import Block from '../ui/block/Block.tsx';

const Statistics = () => {
    const { data, isLoading } = useProfile();

    console.log(data, isLoading);

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <div className={classes.wrapper}>
                    <div className={classes.content}>
                        {data?.statistics.length ? (
                            data?.statistics.map(stat => (
                                <Block
                                    label={stat.label || 'label'}
                                    value={stat.value || '0'}
                                />
                            ))
                        ) : (
                            <>
                                <Block
                                    label='Statistics not found'
                                    value='0'
                                />
                                <Block
                                    label='Statistics not found'
                                    value='0'
                                />
                                <Block
                                    label='Statistics not found'
                                    value='0'
                                />
                                <Block
                                    label='Statistics not found'
                                    value='0'
                                />
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default Statistics;
