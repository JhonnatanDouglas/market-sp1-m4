import { Request, Response } from 'express';
import { Product } from './interfaces';
import market from './database';

let id = 1;

const createProduct = (req: Request, res: Response): Response => {
  const today: Date = new Date();
  const oneMoreYear: Date = new Date(today);
  oneMoreYear.setFullYear(oneMoreYear.getFullYear() + 1);

  const newProduct: Product = {
    ...req.body,
    id: id++,
    expirationDate: oneMoreYear,
  };

  market.push(newProduct);
  return res.status(201).json(newProduct);
};

const readProduct = (req: Request, res: Response): Response => {
  const totalPrice: number = market.reduce((ac, cv) => ac + cv.price, 0);

  return res.status(200).json({ total: totalPrice, products: market });
};

const retrieveProduct = (req: Request, res: Response): Response => {
  const findProduct: Product = res.locals.findProduct;
  return res.status(200).json(findProduct);
};

const updateProduct = (req: Request, res: Response): Response => {
  const findProductId: number = res.locals.findProductId;

  const productUpdated: Product = {
    ...market[findProductId],
    ...req.body,
  };

  market[findProductId] = productUpdated;
  return res.status(200).json(productUpdated);
};

const deleteProduct = (req: Request, res: Response): Response => {
  const findProductId: number = res.locals.findProductId;

  market.splice(findProductId, 1);
  return res.status(204).send();
};

export {
  createProduct,
  readProduct,
  retrieveProduct,
  updateProduct,
  deleteProduct,
};
