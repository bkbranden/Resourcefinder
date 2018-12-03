import React from 'react';

const ImageItem = ({img, onImageSelect, info, access}) =>{
    return(
        <div className="gif-item" onClick={() => onImageSelect(img)}>
            <span>{info[access]}</span>
            {img}
            {/* <img src={img.images.downsized.url} /> */}
        </div>
    )
}

export default ImageItem;