import React from 'react';

export interface Props {
    searchPhrase: string;
    setSearchPhrase: React.Dispatch<React.SetStateAction<string>>;
    placeholderText: string;
    navigation: {
        setOptions: ({}) => void;
        navigate: (route: string) => void;
        goBack: () => void;
    };
}

