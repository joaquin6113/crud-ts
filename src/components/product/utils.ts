import type { Response } from "express"
import { output } from "../../utils/index"
import { IBody, IProduct, IProductDB } from "../../core/types"

function mapProduct(product: IProduct) {
    const productMap = {
        ...product,
        isNew: product.is_new,
        percentageDiscount: product.percentage_discount,
    } as IProductDB

    delete productMap.is_new
    delete productMap.percentage_discount

    if (product.category_id) {
        productMap.categoryId = product.category_id
        delete productMap.category_id
    }

    return productMap
}

export function mapInsertProduct(body: IBody) {
    const { product, category } = body

    if (product.category_id && category) {
        return output({ok:false, data:"No puedes enviar un category_id y category"})
    }

    if (product && category) {
        const insertData = {
            ...mapProduct(product),
            category: {
                create: {
                    ...category
                }
            }
        } 

        return output({ok: true, data: insertData})
    }

    return output({ok: true, data: mapProduct(product)})
}