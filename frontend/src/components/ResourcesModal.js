import React from 'react';
import Modal from 'react-awesome-modal';

const ResourcesModal = (props) => {
    if(!props.selected){
        return <div></div>;
    }
    return (
            <Modal 
                visible={props.isOpen}
                width="400"
                height="300"
                effect="fadeInDown"
                onClickAway={() => props.onRequestClose()}
            >
                <div>
                    <h1>Title</h1>
                    <p>Some Contents</p>
                    <a href="javascript:void(0);" onClick={() => props.onRequestClose()}>Close</a>
                </div>
            </Modal>
    )
}

export default ResourcesModal;