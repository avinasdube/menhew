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

      const productCheck = await Product.findOne({ productId });

      if (productCheck) {
        return res.status(400).json({ error: "Product already exists" })
      }

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

      res.status(200).json({ message: "Uploaded" });
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};


/*--------------------------------------------------------------------*/


export const getProductsByFilter = async (req, res) => {

  const filter = req.body;

  try {
    const fetchedProducts = await Product.find(filter);
    res.status(200).json(fetchedProducts);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
}

