import React from 'react';
import Modal from 'react-awesome-modal';

const ImageModal = (props) => {
    if(!props.selected){
        return <div></div>;
    }
    return (
            <section>
            <Modal 
                visible={props.isOpen}
                width="800"
                height="600"
                effect="fadeInUp"
                onClickAway={() => props.onRequestClose()}
            >
                <div className="modalwrapper">
                    {props.selected}
                    <p>{props.info.fields.description}</p>
                    <button onClick={() => props.onRequestClose()}>Close</button>
                </div>
            </Modal>
            </section>
            
    )
    // if(!props.selected){
    //     return <div></div>;
    // }


    // return(
    //     <Modal
    //         isOpen = {props.isOpen}
    //         onRequestClose={ () => props.onRequestClose() }
    //         ariaHideApp={false}>
    //         <div className="gif-modal">
    //             <img src={ props.selected } />

    //             <button onClick= {() => props.onRequestClose()}>close</button>
    //         </div>
            
            
            
        
    //     </Modal>
    // )
}

export default ImageModal;