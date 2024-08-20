import { getDatabase, ref, child, push, update, onValue } from "firebase/database";

function writeNewPost(valueName ,value, path, keyName) {
    const db = getDatabase()

    const postData = {
        [valueName]: value,
        date: (new Date()).toISOString()
    }

    const newPostKey = push(child(ref(db), keyName)).key

    const updates = {}
    updates[`/${path}` + newPostKey] = postData

    return update(ref(db), updates)
}

function listPost(setRooms, path) {
    const db = getDatabase()
    const roomNameRef = ref(db, path)
    onValue(roomNameRef, (snapshot) => {
        const data = snapshot.val()
        if (data) {
            const roomList = Object.keys(data).map(key => ({ id: key, ...data[key] }))
            setRooms(roomList)
        } else {
            setRooms([])
        }
    })
}

export { writeNewPost, listPost }
