import React, { useState } from 'react';
import {uploadImage} from '../api';
import { useHistory } from "react-router-dom";
export default function Upload() {

    const [selectedImage, setSelectedImage] = useState("");
    const [previewImage, setPreviewImage] = useState("");
    const history = useHistory();

    const onImageChange = (event) => {
        if(event?.target?.files[0]){
            console.log(event);
         
            setSelectedImage(event.target.files[0]);
            setPreviewImage(URL.createObjectURL(event.target.files[0]));
        }
    }

    const onUploadImage = () => {
        const formData = new FormData();
        formData.append('file',selectedImage,selectedImage.name);
        const payload = {
            file: selectedImage
        };
        uploadImage(formData).then((res) => {
            //success
            console.log(res);
            history.push("/")
        }).catch(error=>{console.log(error)});
    }

    return (
        <div>
            <h2>Upload Cat</h2>
            <img src={previewImage} />
            <h4>Select Image</h4>
            <input type="file" name="catImage" accept="image/*, image/png" onChange={onImageChange} />
            <button onClick={onUploadImage}>Upload</button>
        </div>

    )
}