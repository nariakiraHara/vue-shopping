import { get, post } from './repository'

const Endpoint = `api/AmazonShopping/`
export default {
    getList: async function(param: string) {
        const repParam = param.replace(" ", ",")
        const path = `${Endpoint}list/?searchParam=${repParam}`
        let result
        await get(path).then((res) => {
            result = res.data
        }).catch()
        return result
    }
}