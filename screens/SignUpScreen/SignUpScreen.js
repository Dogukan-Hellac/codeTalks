import { View, Text } from 'react-native'
import React from 'react'
import styles from './SignUpScreen.style'
import Input from '../../components/Input'
import Button from '../../components/Button'

export default function SignUpScreen({navigation}) {
    function handleNavigate(){
        navigation.navigate('LogIn')
    }

    return (
        <View style={styles.container}>
            <View style={styles.top_container}>
                <Text style={styles.title}>codetalks</Text>
            </View>
            <View style={styles.bottom_container}>
                <Input placeholder="e-postanızı giriniz.." />
                <Input placeholder="şifrenizi girinz.." />
                <Input placeholder="şifrenizi tekrar giriniz.." />
                <Button title="Kayıt Ol"/>
                <Button title="Geri" theme='secondary' onPress={handleNavigate}/>
            </View>
        </View>
    )
}