import classes from './ListRowParents.module.css';
import { ITaskResponse } from '../../../../types/task.types.ts';
import { Dispatch, FC, SetStateAction } from 'react';
import { Draggable, Droppable } from '@hello-pangea/dnd';
import ListRow from '../listRow/ListRow.tsx';
import { FILTERS } from '../../../tasks/columns.data.ts';
import { filterTask } from '../../../tasks/list/filter-tasks.ts';
import ListAddRowInput from '../listAddRowInput/ListAddRowInput.tsx';

interface IListRowParent {
    value: string;
    label: string;
    items: ITaskResponse[] | undefined;
    setItems: Dispatch<SetStateAction<ITaskResponse[] | undefined>>;
}

const ListRowParent: FC<IListRowParent> = ({
    setItems,
    items,
    value,
    label
}) => {
    return (
        <Droppable droppableId={value}>
            {provided => (
                <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                >
                    <div className={classes.colHeading}>
                        <div>{label}</div>
                    </div>
                    {filterTask(items, value)?.map((item, index) => (
                        <Draggable
                            key={item.id}
                            draggableId={item.id}
                            index={index}
                        >
                            {provided => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                >
                                    <ListRow
                                        key={item.id}
                                        item={item}
                                        setItems={setItems}
                                    ></ListRow>
                                </div>
                            )}
                        </Draggable>
                    ))}
                    {provided.placeholder}
                    {value !== 'completed' &&
                        !items?.some(item => !item.id) && (
                            <ListAddRowInput
                                setItems={setItems}
                                filterDate={
                                    FILTERS[value]
                                        ? FILTERS[value].format()
                                        : undefined
                                }
                            />
                        )}
                </div>
            )}
        </Droppable>
    );
};

export default ListRowParent;
