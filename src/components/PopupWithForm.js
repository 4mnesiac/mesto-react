import closeBtn from '../images/close.svg';

function handleClose(e) {
    e.target.closest('.popup').classList.remove('popup_is-opened');
}

function PopupWithForm(props) {
    return (
        <div className={`popup popup_${props.name} ${props.isOpen}`}>
            <div className="popup__content">
                <img
                    src={closeBtn}
                    alt="Закрыть"
                    className="popup__close" onClick={handleClose} />
                <h3 className="popup__title">{props.title}</h3>
                <form
                    className={`popup__form popup__form_${props.name}`}
                    name={props.name}
                    noValidate
                >
                    {props.children}
                </form>
            </div>
        </div>

    )
}
export default PopupWithForm;

{/* <div className="popup popup_edit">
                <div className="popup__content">
                    <img src={closeBtn} alt="" className="popup__close" onClick={handleClose} />
                    <h3 className="popup__title">{props.title}</h3>
                    <form className="popup__form popup__form_edit" name="edit" noValidate>
                        <input type="text" name="user" className="popup__input" placeholder="Имя" minLength="2" maxLength="30" required />
                        <label htmlFor="user" className="popup__error"></label>
                        <input type="text" name="job" className="popup__input" placeholder="О себе" minLength="2" maxLength="30"
                            required />
                        <label htmlFor="job" className="popup__error"></label>
                        <button className="button popup__button_type_save" disabled>
                            Сохранить
    </button>
                    </form>
                </div>
            </div>

            <div className="popup popup_edit-avatar">
                <div className="popup__content">
                    <img src={closeBtn} alt="" className="popup__close" onClick={handleClose} />
                    <h3 className="popup__title">{props.title}</h3>
                    <form className="popup__form popup__form_edit-avatar" name="avatar" noValidate>
                        <input type="url" name="link" className="popup__input" placeholder="Ссылка на аватар" minLength="2"
                            maxLength="100" required />
                        <label htmlFor="link" className="popup__error"></label>
                        <button className="button popup__button_type_save" disabled>
                            Сохранить
    </button>
                    </form>
                </div>
            </div> */}

        //     <form className="popup__form popup__form_add-card" name={props.name} noValidate>
        //     <input type="text" name="name" className="popup__input" placeholder="Название" minLength="2" maxLength="30"
        //         required />
        //     <label htmlFor="name" className="popup__error"></label>
        //     <input type="url" name="link" className="popup__input" placeholder="Ссылка на картинку" minLength="2"
        //         maxLength="100" required />
        //     <label htmlFor="link" className="popup__error"></label>
        //     <button className="button popup__button" disabled>
        //         +
        //     </button>
        // </form>