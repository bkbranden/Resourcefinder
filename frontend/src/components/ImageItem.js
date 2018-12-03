import React from 'react';

const ImageItem = ({img, onImageSelect}) =>{
    return(
        <div className="gif-item" onClick={() => onImageSelect(img)}>
            {img}
            {/* <img src={img.images.downsized.url} /> */}
        </div>
    )
}

export default ImageItem;