import React from 'react';

export interface Props {
    date: object;
    setDate: React.Dispatch<React.SetStateAction<Date>>;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    text?: string;
    isDate?: boolean;
}
