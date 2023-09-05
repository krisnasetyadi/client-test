import RequestHandler from "../request-handler";
import ENDPOINT from '../../config/api'
class FileApi extends RequestHandler {
    constructor(){
        super(ENDPOINT.FILE)
    }
}

export default new FileApi()