import { View, Text } from 'react-native'
import React from 'react'
import styles from './MessageCard.style'
import { getAuth } from 'firebase/auth'

import { formatDistance, parseISO } from "date-fns";
import { tr } from 'date-fns/locale'

export default function MessageCard({ item }) {
    const userName = getAuth().currentUser.email.split('@')
    const formattedDate = formatDistance(parseISO(item.date), new Date(), {
        addSuffix: true,
        locale: tr,
    })

    return (
        <View style={styles.container}>
            <View style={styles.top_container}>
                <Text>{userName[0]}</Text>
                <Text>{formattedDate}</Text>
            </View>
            <Text style={styles.text}>{item.message}</Text>
        </View>
    )
}