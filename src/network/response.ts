import type { Response } from "express";

interface IResponse {
    res: Response,
    data: any,
    status?: number,
    ok: boolean
}

export function response({ res, ok, data, status = 200 }: IResponse): Response {
    return res.status(status).json({
      ok,
      data,
    });
  }