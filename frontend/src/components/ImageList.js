import React from 'react';
import ImageItem from './ImageItem';

const ImageList = (props) => {
    const imageItems = props.images.map((image) => {
        return <ImageItem key={image.key} img = {image} onImageSelect={props.onImageSelect} info={props.info} access={parseInt(image.key, 10)}/>
    }); 
    return( 
        <div className="gif-list">{imageItems}</div>
    );
    
};

export default ImageList;