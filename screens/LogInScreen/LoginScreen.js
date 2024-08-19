import { Text, View } from 'react-native'
import React from 'react'
import styles from './LoginScreen.style'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { Formik } from 'formik'
import { authLogIn } from '../../features/Auth'

export default function HomeScreen({ navigation }) {
    function handleNavigateSignUp() {
        navigation.navigate('SignUp')
    }

    function handleNavigateComplete() {
        navigation.navigate('CreateRooms')
    }

    return (
        <View style={styles.container}>
            <View style={styles.top_container}>
                <Text style={styles.title}>codetalks</Text>
            </View>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                onSubmit={values => authLogIn({ email: values.email, password: values.password, thenFunction: handleNavigateComplete })}
            >
                {({ handleChange, handleSubmit, values }) => (
                    <View style={styles.bottom_container}>
                        <Input
                            placeholder="e-postanızı giriniz.."
                            onChangeText={handleChange('email')}
                            value={values.email}
                        />
                        <Input
                            placeholder="şifrenizi giriniz.."
                            onChangeText={handleChange('password')}
                            value={values.password}
                        />
                        <Button
                            title="Giriş Yap"
                            onPress={handleSubmit}
                        />
                        <Button title="Kayıt Ol" theme='secondary' onPress={handleNavigateSignUp} />
                    </View>
                )}
            </Formik>
        </View>
    )
}

