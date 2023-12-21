import React, { useState } from 'react';
import './AddProduct.scss';
import adpd from '../../assets/icons/addproduct.png';

const AddProduct = () => {
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productSize, setProductSize] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [selectedImages, setSelectedImages] = useState(Array.from({ length: 4 }, () => null));

    const handleImageChange = (e, index) => {
        const files = e.target.files;
        console.log(files)

        if (files.length > 0) {
            const updatedImages = [...selectedImages];
            updatedImages[index] = URL.createObjectURL(files[0]);
            setSelectedImages(updatedImages);
            console.log(selectedImages)
        } else {
            const updatedImages = [...selectedImages];
            updatedImages[index] = null;
            setSelectedImages(updatedImages);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (selectedImages.length > 0) {
            try {
                const formData = new FormData();

                formData.append('productName', productName);
                formData.append('productDescription', productDescription);
                formData.append('productPrice', productPrice);
                formData.append('productSize', productSize);
                formData.append('productCategory', productCategory);

                selectedImages.forEach((image, index) => {
                    formData.append(`image${index + 1}`, image);
                });

                // Log FormData entries
                const formDataEntries = Array.from(formData.entries());
                console.log('FormData Entries:', formDataEntries);

                console.log(selectedImages);
                // const response = await axios.post('/api/upload', formData);

                // console.log('Images uploaded successfully:', response.data);
            } catch (error) {
                console.error('Error uploading images:', error);
            }
        } else {
            console.warn('No images selected for upload.');
        }
    }

    return (
        <div className="addProductFormContainer">
            <form className="addProductFormBox" onSubmit={handleSubmit}>
                <div className="addProductHeader">
                    <div className="addProductHeading">
                        <div className="addProductHeading1">Add Product</div>
                        <div className="addProductHeading2">Add new products from here.</div>
                    </div>
                    <div className="addProductActions">
                        <button type="submit" className="publishBtn">Publish</button>
                    </div>
                </div>
                <div className="formFields">
                    <div className="basicInfoBox">
                        <div className="inputBox">
                            <label>Enter product name</label>
                            <input type="text" className="prodInput" onChange={(e) => setProductName(e.target.value)}></input>
                        </div>
                        <div className="inputBox">
                            <label>Enter product description</label>
                            <input type="text" className="prodInput" onChange={(e) => setProductDescription(e.target.value)}></input>
                        </div>
                        <div className="inputBox">
                            <label>Enter product price</label>
                            <input type="text" className="prodInput" onChange={(e) => setProductPrice(e.target.value)}></input>
                        </div>
                        <div className="inputBox">
                            <label>Choose product size</label>
                            <input type="text" className="prodInput" placeholder="Enter any of S/M/L/XL/XXL" onChange={(e) => setProductSize(e.target.value)}></input>
                        </div>
                    </div>
                    <div className="catInfoBox">
                        <div className="inputBox">
                            <label>Enter product category</label>
                            <input type="text" className="prodInput" onChange={(e) => setProductCategory(e.target.value)}></input>
                        </div>
                    </div>
                    <div className="imgInfoBox">
                        <div className="inputBox">
                            <label>Upload product Images</label>
                            <div className="uploadProductImages">
                                {selectedImages.map((image, index) => (
                                    <div key={index} className="renderdImages">
                                        <input type="file" id={index} onChange={(e) => handleImageChange(e, index)} style={{ display: 'none' }} />
                                        <label htmlFor={index} className="inputLabel"><img src={adpd} alt='' className="altImg"></img></label>
                                        {image && (
                                            <div className="previewImage">
                                                <img src={image} alt={`Preview ${index + 1}`} className="pvImg" />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddProduct