import React from 'react';

export interface Props {
    data: Array<{ label: string; id: string }>;
    setElement: React.Dispatch<React.SetStateAction<number>>;
}
