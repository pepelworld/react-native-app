import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../constants/theme';
import { store } from '../store/RootStore';

const CustomDrawerContent = (props: any) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.profileInfo}>
                <Image
                    style={styles.avatar}
                    source={{
                        uri: 'https://upload.wikimedia.org/wikipedia/ru/5/5f/Original_Doge_meme.jpg?20140214170515',
                    }}
                />
                <Text
                    style={{
                        marginTop: 10,
                        color: COLORS.black,
                        fontSize: 18,
                        fontWeight: '400',
                    }}>
                    {store.user.name}
                </Text>
                <Text style={{ marginTop: 5, marginBottom: 5 }}>
                    {store.user.email}
                </Text>
            </View>

            <DrawerContentScrollView>
                <DrawerItemList {...props} onPress={() => console.log(props)} />
                {/*<DrawerItem label="Выйти" onPress={() => console.log('exit')} />*/}
            </DrawerContentScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginTop: 24,
    },
    profileInfo: {
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: COLORS.lightSeparator,
        borderBottomWidth: 1,
        paddingBottom: 13,
    },
    avatar: { height: 150, width: 150, borderRadius: 90 },
});

export default CustomDrawerContent;
