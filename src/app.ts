import express, { Application, json } from 'express';
import {
  createProduct,
  retrieveProduct,
  readProduct,
  updateProduct,
  deleteProduct,
} from './logics';
import { productExist, productIdExist } from './middlewares';

const app: Application = express();
app.use(json());

app.post('/products', productExist, createProduct);
app.get('/products', readProduct);
app.get('/products/:id', productIdExist, retrieveProduct);
app.patch('/products/:id', productExist, productIdExist, updateProduct);
app.delete('/products/:id', productIdExist, deleteProduct);

const PORT: number = 3000;
const message: string = `Server is running on http://localhost:${PORT}`;
app.listen(PORT, (): void => {
  console.log(message);
});
