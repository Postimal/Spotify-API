import React from 'react';
import './Modal.scss';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
    <>
        <Backdrop show={props.show} clicked={props.modalClosed}/>
        <div 
            className='modal' 
            style={{ 
                transform: props.show? 'translateX(0)' : 'translateX(-100vh)', 
                top: props.positionY
            }}>
            {props.children}
        </div>
    </>
);

export default modal;