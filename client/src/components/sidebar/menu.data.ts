import {
    Calendar,
    LayoutDashboard,
    ListChecks,
    LucideIcon,
    Settings,
    Timer
} from 'lucide-react';
import { PAGES } from '../../config/Pages.ts';

export interface IMenu {
    link: string;
    name: string;
    icon: LucideIcon;
}

export const Menu: IMenu[] = [
    {
        link: PAGES.HOME,
        icon: LayoutDashboard,
        name: 'Dashboard'
    },
    {
        link: PAGES.TASKS,
        icon: ListChecks,
        name: 'Tasks'
    },
    {
        link: PAGES.TIMER,
        icon: Timer,
        name: 'Timer'
    },
    {
        link: PAGES.TIME_BLOCK,
        icon: Calendar,
        name: 'Time Block'
    },
    {
        link: PAGES.SETTINGS,
        icon: Settings,
        name: 'Settings'
    }
];
