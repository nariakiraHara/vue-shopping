import { get, post } from './repository'

const Endpoint = `api/RakutenShopping/`
export default {
    getList: async function() {
        const path = `${Endpoint}list/?searchParam=モニター`
        const result: any = []
        get(path).then((res) => {
            result.push(res)
        })
        return result
    }
}