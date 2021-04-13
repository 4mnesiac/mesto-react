import closeBtn from '../images/close.svg';

function ImagePopup(props) {
    return (
        <div className={`popup popup_type_${props.name} ${props.isOpen}`}>
            <div className="popup__content_type_image">
                <img
                    src={props.card}
                    alt=""
                    className="popup__image"
                />
                <img
                    src={closeBtn}
                    alt="Закрыть"
                    className="popup__close"
                />
            </div>
        </div>
    )
}

export default ImagePopup;