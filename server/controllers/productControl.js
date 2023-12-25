import { Product } from '../models/productModel.js';
import { multerUpload } from '../middleware/multerMiddleware.js';

export const addNewProduct = async (req, res) => {
  try {
    multerUpload(req, res, async (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error uploading files');
      }

      const { productId, productName, productDescription, productPrice, productSize, productCategory } = req.body;

      const product = new Product({
        productId,
        productName,
        productDescription,
        productPrice,
        productSize,
        productCategory,
      });

      await product.save();

      const { _id: originalId } = product;
      const imageNames = req.files.map(file => file.originalname);

      await Product.findByIdAndUpdate(originalId, { images: imageNames });

      res.send('Product details and files uploaded successfully');
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

