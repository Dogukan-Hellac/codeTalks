import { View, Text } from 'react-native'
import React from 'react'
import styles from './SignUpScreen.style'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { Formik } from 'formik'
import { authSignUp } from '../../features/Auth'

export default function SignUpScreen({ navigation }) {
    function handleNavigate() {
        navigation.navigate('LogIn')
    }

    return (
        <View style={styles.container}>
            <View style={styles.top_container}>
                <Text style={styles.title}>codetalks</Text>
            </View>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    rePassword: ''
                }}
                onSubmit={values => authSignUp({ email: values.email, password: values.password, thenFunction: handleNavigate })}
            >
                {({ handleChange, handleSubmit, values }) => (
                    <View style={styles.bottom_container}>
                        <Input
                            placeholder="e-postanızı giriniz.."
                            onChangeText={handleChange('email')}
                            value={values.email}
                        />
                        <Input
                            placeholder="şifrenizi girinz.."
                            onChangeText={handleChange('password')}
                            value={values.password}
                        />
                        <Input
                            placeholder="şifrenizi tekrar giriniz.."
                            onChangeText={handleChange('rePassword')}
                            value={values.rePassword}
                        />
                        <Button
                            title="Kayıt Ol"
                            onPress={handleSubmit}
                        />
                        <Button
                            title="Geri"
                            theme='secondary'
                            onPress={handleNavigate}
                        />
                    </View>
                )}
            </Formik>
        </View >
    )
}