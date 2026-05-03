export class BaseController {
    static async success(res, message, data, status = 200) {
        res.status(status).json({ 
            status: true,
            message, 
            data 
        });
    }

    static async error(res, message, status = 500) {
        res.status(status).json({ 
            status: false,
            message 
        });
    }
}