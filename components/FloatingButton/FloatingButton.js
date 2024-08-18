import { TouchableOpacity, Text } from 'react-native'
import React from 'react'
import styles from './FloatingButton.style'
import AntDesign from '@expo/vector-icons/AntDesign';
import colors from '../../constants/Color';

export default function FloatingButton({ onPress }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <AntDesign name="plus" size={20} color={colors.white} style={styles.icon} />
        </TouchableOpacity>
    )
}