import React from 'react';
import Modal from 'react-awesome-modal';
import { Line, Circle } from 'rc-progress';

const ImageModal = (props) => {
    if(!props.selected){
        return <div></div>;
    }
    return (
            <section>
                <Modal
                    portalClassName="modalview"
                    visible={props.isOpen}
                    width="800"
                    height="600"
                    effect="fadeInUp"
                    onClickAway={() => props.onRequestClose()}
                >
                    
                        <div className="modalwrapper">
                            {props.selected}
                            <h2>{props.info.fields.description}</h2>
                            <h3>{props.info.fields.percent_full}% Occupancy</h3>
                            <Line percent={props.info.fields.percent_full} strokeWidth="3" strokeColor="#c51f5d"/>
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