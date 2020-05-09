import axios from 'axios'

const baseDomain = 'localhost:5001/'
const baseURL = `https://${baseDomain}`

const instance = axios.create({ 
    baseURL: `${baseURL}`, 
    headers: { 'Content-Type': 'application/json' }, 
    responseType: 'json'
})

export const get = async function(url: string, option = null) {
    return await instance.get(url)
}

export const post = async function(url: string) {
    return await instance.post(url)
}