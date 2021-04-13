import PopupWithForm from './PopupWithForm';


function Main(props) {

    return (
        <main>
            <div className="profile app__section">
                <div className="user-info">
                    <div className="user-info__photo" onClick={props.onEditAvatar}></div>
                    <div className="user-info__data">
                        <h1 className="user-info__name"></h1>
                        <p className="user-info__job"></p>
                        <button type="button" className="user-info__edit-button" onClick={props.onEditProfile}>Edit</button>
                    </div>
                    <button className="button user-info__button" onClick={props.onAddCard}>+</button>
                </div>
            </div>
            <div className="places-list app__section">
            </div>
        </main>
    )
}

export default Main;