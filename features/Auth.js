import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { Alert } from "react-native";

const authSignUp = ({ email, password, thenFunction = undefined }) => {
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            Alert.alert('Başarılı', 'Kayıt işleminiz başarıyla tamamlandı.')
            thenFunction()
        })
        .catch((err) => {
            Alert.alert('Başarısız', err.message)
        })
}

const authLogIn = ({ email, password, thenFunction = undefined }) => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            Alert.alert('Başarılı', 'Giriş Yapıldı')
            thenFunction()
        })
        .catch((err) => {
            Alert.alert('Başarısız', err.message)
        })
}

export { authLogIn, authSignUp }