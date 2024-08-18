import { Text, View } from 'react-native'
import React from 'react'
import styles from './LoginScreen.style'
import Input from '../../components/Input'
import Button from '../../components/Button'

export default function HomeScreen({navigation}) {
    function handleNavigate(){
        navigation.navigate('SignUp')
    }

    return (
        <View style={styles.container}>
            <View style={styles.top_container}>
                <Text style={styles.title}>codetalks</Text>
            </View>
            <View style={styles.bottom_container}>
                <Input placeholder="e-postanızı giriniz.." />
                <Input placeholder="şifrenizi giriniz.." />
                <Button title="Giriş Yap" />
                <Button title="Kayıt Ol" theme='secondary' onPress={handleNavigate} />
            </View>
        </View>
    )
}

