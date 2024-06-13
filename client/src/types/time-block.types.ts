import { IBase } from './root.types.ts';

export interface ITimeBlockResponse extends IBase {
    name: string;
    color?: string;
    duration: number;
    order: number;
}

export type TypeTimeBlockStateForm = Partial<
    Omit<ITimeBlockResponse, 'createdAt' | 'updatedAt'>
>;
