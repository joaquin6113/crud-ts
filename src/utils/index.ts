import type { Response } from "express";
import { prismaError } from "../db";
import { response } from "../network/response";
 
interface IResponse {
    ok: boolean;
    data: any;
}

export function output({ ok, data }: IResponse): IResponse {
    return {
        ok,
        data,
    }
}

export function handleResponseError(res: Response, error: unknown) {
    if (error instanceof prismaError) {
        return response({
            res, 
            data:`DB Error(${error.code}): ${error.message}`, 
            ok:false,
            status:500
        })
    }
    return response({ok:false, res, data:`Error: ${error}`, status:500})
}
