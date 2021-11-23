import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Drawer, Avatar, Title, Caption } from 'react-native-paper';

import Feather from 'react-native-vector-icons/Feather';

const BottomTabContent = ({ props }) => {
    return (

    );
};

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userSection: {
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginTop: 10,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 13,
        lineHeight: 14,
    },
    drawerSection: {
        marginTop: 5,
        borderTopColor: 'black',
        borderTopWidth: 0.5,
    },
    bottomDrawerSection: {
        marginBottom: 5,
        borderTopColor: 'black',
        borderWidth: 0.25,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});

export default BottomTabContent;
