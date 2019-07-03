import { AsyncStorage } from 'react-native';


export async function getStorage(key) {
    let value = AsyncStorage.getItem(key)
    return value;
}

// export async function setStorage(key, value) {
//     let value = AsyncStorage.setItem(key, value)
// }