import React from 'react';
import ImageItem from './ImageItem';

const ImageList = (props) => {
    const imageItems = props.images.map((image) => {
        return <ImageItem key={image.key} img={image} onImageSelect={props.onImageSelect}/>
    }); 
    return( 
        <div className="gif-list">{imageItems}</div>
    );
    
};

export default ImageList;