const errorStatusCode = {
    unauthorized: 401,
    conflict: 409,
    unprocessable_entity: 422,
}

export function unauthorizedError(){
    return { type: "unauthorized" }
}

export function conflictError(){
    return { type: "conflict" }
}
export function unprocessableEntityError(){
    return { type: "unprocessable_entity" }
}

export default function handleErrors(error,req,res,next){
    if (error.type){
        return res.sendStatus(errorStatusCode[error.type]);
    }
    return res.sendStatus(500);
}