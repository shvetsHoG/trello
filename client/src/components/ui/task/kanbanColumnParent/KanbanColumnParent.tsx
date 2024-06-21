import classes from './KanbanColumnParents.module.css';
import { ITaskResponse } from '../../../../types/task.types.ts';
import { Dispatch, FC, SetStateAction } from 'react';
import { Draggable, Droppable } from '@hello-pangea/dnd';
import { FILTERS } from '../../../tasks/columns.data.ts';
import { filterTask } from '../../../tasks/filter-tasks.ts';
import ListAddRowInput from '../listAddRowInput/ListAddRowInput.tsx';
import Span from '../../span/Span.tsx';
import KanbanColumn from '../kanbanColumn/KanbanColumn.tsx';

interface IListRowParent {
    value: string;
    label: string;
    items: ITaskResponse[] | undefined;
    setItems: Dispatch<SetStateAction<ITaskResponse[] | undefined>>;
}

const KanbanColumnParent: FC<IListRowParent> = ({
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
                    className={classes.wrapper}
                >
                    <div>
                        <Span
                            weight={'bold'}
                            size={'m'}
                        >
                            {label}
                        </Span>
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
                                    <KanbanColumn
                                        key={item.id}
                                        item={item}
                                        setItems={setItems}
                                    ></KanbanColumn>
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

export default KanbanColumnParent;
