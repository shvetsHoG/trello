import { X } from 'lucide-react';
import { FC } from 'react';

interface ExitProps {
    size?: number;
}

const Exit: FC<ExitProps> = ({ size }) => {
    return (
        <>
            <X size={size || 24} />
        </>
    );
};

export default Exit;
