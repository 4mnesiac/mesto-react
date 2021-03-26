import PopupWithForm from "./PopupWithForm";


function EditProfilePopup(props) {
    return (
        <PopupWithForm
            isOpen={props.isOpen ? "popup_is-opened" : ""}
            onClose={props.onClose}
            // onSubmit={handleSubmit}
            // isSaving={props.isSaving}
            name="edit"
            title="Редактировать профиль"
        >
            <input
                type="text"
                name="user"
                className="popup__input"
                placeholder="Имя"
                minLength="2"
                maxLength="30"
                required
            />
            <label
                htmlFor="user"
                className="popup__error">
            </label>
            <input
                type="text"
                name="job"
                className="popup__input"
                placeholder="О себе"
                minLength="2"
                maxLength="30"
                required
            />
            <label
                htmlFor="job"
                className="popup__error">
            </label>
            <button
                className="button popup__button_type_save"
                disabled>
                Сохранить
            </button>
        </PopupWithForm>
    )
}

export default EditProfilePopup;