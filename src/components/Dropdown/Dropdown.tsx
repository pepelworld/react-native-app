import SelectDropdown from 'react-native-select-dropdown';
import React, { useState } from 'react';
import { Props } from './Dropdown.types';
import { COLORS } from '../../constants/theme';
import { ArrowDownIcon, ArrowUpIcon } from '../../constants/icons';
import { TouchableOpacity } from 'react-native';

const Dropdown = ({ data, setElement }: Props) => {
    const [opened, setOpened] = useState(false);

    return (
        <SelectDropdown
            data={data}
            defaultButtonText={'Разное'}
            onSelect={selectedItem => {
                setElement(selectedItem.id);
            }}
            buttonTextAfterSelection={selectedItem => {
                return selectedItem.label;
            }}
            rowTextForSelection={item => {
                return item.label;
            }}
            defaultValueByIndex={0}
            buttonStyle={{
                borderColor: COLORS.gray,
                borderWidth: 1,
                backgroundColor: '#FFFFF00',
                height: 44,
                width: '100%',
                borderRadius: 10,
            }}
            buttonTextStyle={{
                textAlign: 'left',
                marginLeft: 10,
            }}
            renderDropdownIcon={() =>
                opened == true ? (
                    <TouchableOpacity
                        style={{
                            width: 20,
                            height: 20,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginRight: 10,
                        }}>
                        <ArrowUpIcon fill={COLORS.lightAccent} />
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        style={{
                            width: 20,
                            height: 20,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginRight: 10,
                        }}>
                        <ArrowDownIcon fill={COLORS.lightAccent} />
                    </TouchableOpacity>
                )
            }
            onFocus={() => setOpened(true)}
            onBlur={() => setOpened(false)}
        />
    );
};

export default Dropdown;
