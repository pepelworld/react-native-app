import React from 'react';

export interface Props {
    searchPhrase: string;
    setSearchPhrase:
        | React.Dispatch<React.SetStateAction<string>>
        | ((text: string) => void);
    placeholderText: string;
}
