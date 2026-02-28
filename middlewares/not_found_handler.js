const not_found_handler = (request, response, next) => {
    return response.status(404).json({
        status: 404,
        success: false,
        message: `The request with method ${request.method} with path ${request.ur} was no found`
    })
}

export default not_found_handler;