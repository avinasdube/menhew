import React, { useEffect, useState } from 'react';
import './AddProduct.scss';
import adpd from '../../assets/icons/addproduct.png';
import { addnewproduct } from '../../api/api';

const AddProduct = () => {
    const [productId, setProductId] = useState('')
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productSize, setProductSize] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [selectedImages, setSelectedImages] = useState(Array.from({ length: 4 }, () => null)); // creating array of length with each element set to null

    // handling image previews of selected images
    useEffect(() => {
        // map each selectedImage to it's corresponding object url
        const previews = selectedImages.map(image => image && URL.createObjectURL(image));

        // revoke function: revoke the object urls when the component unmounts or when selected image changes
        return () => previews.forEach(preview => preview && URL.revokeObjectURL(preview));
    }, [selectedImages]);

    // function to handle change in form fields
    const handleImageChange = (e, index) => {
        const files = e.target.files;

        // check if there is at least one file selected.
        if (files.length > 0) {
            const updatedImages = [...selectedImages];
            updatedImages[index] = files[0];
            setSelectedImages(updatedImages);
        } else {
            const updatedImages = [...selectedImages];
            updatedImages[index] = null;
            setSelectedImages(updatedImages);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (selectedImages.some(image => image !== null)) {
            try {
                const formData = new FormData();

                formData.append('productName', productName);
                formData.append('productDescription', productDescription);
                formData.append('productPrice', productPrice);
                formData.append('productSize', productSize);
                formData.append('productCategory', productCategory);
                formData.append('productId', productId);

                for (const selectedImage of selectedImages) {
                    formData.append('images[]', selectedImage);
                }

                const response = await addnewproduct(formData);

                if (response?.data?.message === "Uploaded") {
                    window.location.reload();
                }
            } catch (error) {
                console.error('Error uploading images:', error);
            }
        } else {
            console.warn('No images selected for upload.');
        }
    }

    return (
        <div className="addProductFormContainer">
            <form className="addProductFormBox" onSubmit={handleSubmit} encType="multipart/form-data">
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
                            <label>Enter product ID</label>
                            <input type="text" placeholder="Enter a unique string" className="prodInput" onChange={(e) => setProductId(e.target.value)} required></input>
                        </div>
                        <div className="inputBox">
                            <label>Enter product name</label>
                            <input type="text" className="prodInput" onChange={(e) => setProductName(e.target.value)} required></input>
                        </div>
                        <div className="inputBox">
                            <label>Enter product description</label>
                            <input type="text" className="prodInput" onChange={(e) => setProductDescription(e.target.value)} required></input>
                        </div>
                        <div className="inputBox">
                            <label>Enter product price</label>
                            <input type="text" className="prodInput" onChange={(e) => setProductPrice(e.target.value)} required></input>
                        </div>
                        <div className="inputBox">
                            <label>Choose product size</label>
                            <input type="text" className="prodInput" placeholder="Enter any of S/M/L/XL/XXL" onChange={(e) => setProductSize(e.target.value)} required></input>
                        </div>
                        <div className="inputBox">
                            <label>Enter product category</label>
                            <input type="text" className="prodInput" onChange={(e) => setProductCategory(e.target.value)} required></input>
                        </div>
                    </div>
                    <div className="imgInfoBox">
                        <div className="inputBox">
                            <label>Upload product Images</label>
                            <div className="uploadProductImages">
                                {selectedImages.map((image, index) => (
                                    <div key={index} className="renderdImages">
                                        <input type="file" id={index} name="images" onChange={(e) => handleImageChange(e, index)} style={{ display: 'none' }} />
                                        <label htmlFor={index} className="inputLabel"><img src={adpd} alt='' className="altImg"></img></label>
                                        {image && (
                                            <div className="previewImage">
                                                <img src={URL.createObjectURL(image)} alt={`Preview ${index + 1}`} className="pvImg" />
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

export default AddProduct;