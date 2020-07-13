const { useCallback } = require("react")

exports.handler = function(event, context, callback){
    const sevcretContent = `
    <h3>Welcome to the secret area</h3>
    <p>Here the sky is <strong>blue</strong>, and the grass is green</p>
    
    `

    
    let body

    if(event.body){
        body=JSON.parse(event.body)
    }else{
        body = {}
    }

    if (body.password == "javascript"){
        callback(null, {
            statusCode: 200,
            body: sevcretContent
        })
    }else{
        callback(null, {
            statusCode: 401,
        })
    }

   
}