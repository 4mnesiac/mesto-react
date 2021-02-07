import PopupWithForm from './PopupWithForm';


function handleEditProfileClick(e) {

    // document.querySelector('.popup_edit').classList.add('popup_is-opened')
}
function handleEditAvatarClick() {
    document.querySelector('.popup_edit-avatar').classList.add('popup_is-opened')
}
function handleAddPlaceClick() {
    document.querySelector('.popup_add-card').classList.add('popup_is-opened')
}


function Main() {
    return (
        <main>
            <div className="profile app__section">
                <div className="user-info">
                    <div className="user-info__photo" onClick={ }></div>
                    <div className="user-info__data">
                        <h1 className="user-info__name"></h1>
                        <p className="user-info__job"></p>
                        <button type="button" className="user-info__edit-button" onClick={props.onEditProfile}>Edit</button>
                    </div>
                    <button className="button user-info__button" onClick={handleAddPlaceClick}>+</button>
                </div>
            </div>
            <div className="places-list app__section">
            </div>

        </main>
    )
}

export default Main;