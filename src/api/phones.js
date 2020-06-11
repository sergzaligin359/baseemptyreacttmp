import phones from './mockData/mockPhones'

export const fetchPhones = async () => {
    return new Promise((resolve, reject) => {
        resolve(phones)
    })
}