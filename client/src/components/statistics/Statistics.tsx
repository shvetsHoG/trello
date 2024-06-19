import classes from './Statistics.module.css';
import useProfile from '../../hooks/useProfile.ts';
import Loader from '../ui/loader/Loader.tsx';
import Block from '../ui/block/Block.tsx';

const Statistics = () => {
    const { data, isLoading } = useProfile();

    return (
        <div className={classes.wrapper}>
            {isLoading ? (
                <Loader />
            ) : (
                <div className={classes.content}>
                    {data?.statistics.length ? (
                        data?.statistics.map(stat => (
                            <Block
                                color={'black'}
                                label={stat.label || 'label'}
                                value={stat.value || '0'}
                            />
                        ))
                    ) : (
                        <>
                            <Block
                                color={'black'}
                                label='Statistics not found'
                                value='0'
                            />
                            <Block
                                color={'black'}
                                label='Statistics not found'
                                value='0'
                            />
                            <Block
                                color={'black'}
                                label='Statistics not found'
                                value='0'
                            />
                            <Block
                                color={'black'}
                                label='Statistics not found'
                                value='0'
                            />
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default Statistics;
