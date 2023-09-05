import { toast } from "react-hot-toast/headless"
import swal from "sweetalert2"

const api = 'http://localhost:3000'

export default class RequestHandler {
    constructor(url: string) {
        this.url = url
        this.api = api
    }

     upload(params: any, url = this.url) {
        return new Promise(async(resolve, reject) => {
            try {
               const formData = new FormData()
               formData.append('file', params)
               const response = await fetch(`${api}/${url}/upload`,{
                method: 'POST',
                body: formData
                })
               if(response.ok) {
                 resolve(response)
               } else {
                console.log('response', response)
                if(response.status === 404) {
                    swal.fire({
                        text: `Route not found`,
                        icon: 'error'
                    })
                }
                reject(response) 
                }
            } catch (error) {
                console.log('errorr handler', error)
                    reject(error)
            }
        })
    }
}