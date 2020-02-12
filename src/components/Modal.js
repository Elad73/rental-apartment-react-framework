import React from 'react';

class Modal extends React.Component {
    render() {
        return (
            <div className="modal" id="modal">
                <div className="modal__content">
                    <div className="modal__left">
                        <img className="modal__img" src="../../../img/appartement/nat-1-large.jpg" alt="no pets"/>
                        <img className="modal__img" src="../../../img/appartement/nat-2-large.jpg" alt="no smoking"/>
                    </div>
                    <div className="modal__right">
                        <a href="#section-tours" className="modal__close">&times;</a>
                        <h2 className="heading-secondary u-margin-bottom-medium">Start booking now</h2>
                        <h3 className="heading-tertiary u-margin-bottom-small">Important &ndash; please read these temrs before booking</h3>
                        <p className="modal__text">
                            dlfsgsldfgkjsldfkgj sldfgk slfkg jsldfkg sldkfg sl kjlsdk fg
                            sdfglk sldfkg slf lsdk lsdkfjg lsdkfg lsdkf lsdkfgj lsdkfg sdfglklskf listsdlfk
                            slfdkgj slkdf lskdf  sldfkjg slkf lskfg toweirutowirtowiru jskfjgskfdjghiertuoweirut
                            owiertowiurtoiwur skdfjghskdjfgh wioert 
                        </p>
                        <a href="#section-tours" className="btn btn--light-gold">Book now</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;