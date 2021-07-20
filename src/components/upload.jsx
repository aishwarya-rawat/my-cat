import React, { useState } from 'react';
import {uploadImage} from '../api';
import { useHistory } from 'react-router-dom';
import './upload.scss';
export default function Upload() {

    const [selectedImage, setSelectedImage] = useState("");
    const [previewImage, setPreviewImage] = useState("");
    const history = useHistory();

    const onImageChange = (event) => {
        if(event?.target?.files[0]){
            setSelectedImage(event.target.files[0]);
            setPreviewImage(URL.createObjectURL(event.target.files[0]));
        }
    }

    const onUploadImage = () => {
        if(selectedImage){
            const formData = new FormData();
            formData.append('file',selectedImage,selectedImage.name);
            uploadImage(formData).then((res) => {
                if(res){
                    history.push('/')
                }
            })
        }
    }

    return (
        <div>
            <h2>Upload Cat</h2>
            {previewImage && <img className="img-cont" alt="cat" src={previewImage} />}
            <div className="p-s">
            <h4>Select Image</h4>
            <input type="file" name="catImage" accept="image/jpeg, image/png" onChange={onImageChange} />
            <button onClick={onUploadImage}>Upload</button>
            </div>
        </div>

    )
}