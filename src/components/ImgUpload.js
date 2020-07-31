import React, {useState} from 'react';
import MemeGenerator from './MemeGenerator';

function ImgUpload() {

    const [image, setImage] = useState(null);

    function imageUploadHandler(event) {
        const imageSave = URL.createObjectURL(event.target.files[0]);
        setImage(imageSave);
    }

    return(
        <div>
            <input 
            type="file" 
            id="avatar"
            name="avatar"
            onChange={event => imageUploadHandler(event)}
            accept="image/png, image/jpeg"/>
            {image && <MemeGenerator image={image}/>}
        </div>
    )
}

export default ImgUpload;