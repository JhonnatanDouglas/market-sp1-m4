import { NextFunction, Request, Response } from 'express';
import market from './database';
import { Product } from './interfaces';

const productExist = (
  req: Request,
  res: Response,
  next: NextFunction
): void | Response => {
  const productRequest: Product = req.body;

  const productExist: boolean = market.some(
    (product: Product) => product.name === productRequest.name
  );

  if (productExist) {
    return res.status(409).json({ message: 'Product already registered.' });
  }

  return next();
};

const productIdExist = (
  req: Request,
  res: Response,
  next: NextFunction
): void | Response => {
  const idParam: number = Number(req.params.id);
  const findProduct: Product | undefined = market.find(
    (product) => product.id === idParam
  );

  if (!findProduct) {
    return res.status(404).json({ message: 'Product not found.' });
  }

  const findProductId: number = market.indexOf(findProduct);

  res.locals.findProduct = findProduct;
  res.locals.findProductId = findProductId;

  return next();
};

export { productIdExist, productExist };
