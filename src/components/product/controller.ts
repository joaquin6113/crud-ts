import type { Response, Request } from "express"
import { prisma } from "../../db"
import { response } from "../../network/response"
import { handleResponseError } from "../../utils"
import { IBody } from "../../core/types"
import { mapInsertProduct } from "./utils"

export async function list(_req: Request, res: Response): Promise<Response> {
    try {
        const products = await prisma.product.findMany()
        return response({ok:true, res, data:products})
    } catch (error) {
        return handleResponseError(res, error)
    }
}

export async function store(req: Request, res: Response): Promise<Response> {
    try {
        const { ok, data } = mapInsertProduct(req.body as IBody)

        if (!ok) {
            return response({ok:false, res, data, status:500})
        }

        const newProduct = await prisma.product.create({ data })

        return response({ok:true, res, data:newProduct, status:201})
    } catch (error) {
        return handleResponseError(res, error)
    } 
}