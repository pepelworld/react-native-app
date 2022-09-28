import React from 'react';
import styled from 'styled-components/native';
import { SearchIcon } from '../../../constants/icons';
import { COLORS } from '../../../constants/theme';
import { Props } from './Search.types';

const Search = ({ searchPhrase, setSearchPhrase, placeholderText }: Props) => {
    return (
        <SearchSection>
            <SearchIcon fill={COLORS.inactiveIcon} />
            <Input
                placeholder={placeholderText}
                value={searchPhrase}
                onChangeText={setSearchPhrase}
            />
        </SearchSection>
    );
};

export default Search;

const SearchSection = styled.View`
    flex-direction: row;
    align-items: center;
    background-color: ${COLORS.gray};
    width: 100%;
    height: 44px;
    border-radius: 10px;
    border-width: 1px;
    border-color: ${COLORS.lightSeparator};
    padding-left: 15px;
`;

const Input = styled.TextInput`
    background-color: ${COLORS.gray};
    border-radius: 10px;
    width: 80%;
    height: 42px;
    padding-left: 10px;
`;
