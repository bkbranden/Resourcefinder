import React from 'react';

const ImageItem = ({img, onImageSelect}) =>{
    return(
        <div className="gif-item" onClick={() => onImageSelect(img)}>
            {img}
        </div>
    )
}

export default ImageItem;