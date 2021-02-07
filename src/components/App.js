import '../index.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

function App() {
  return (
    <div className="app">
      {Header()}
      {Main()}
      
      {Footer()}

      {/* <!-- попап для увеличения картинки --> */}
      <div className="popup popup_type_image">
        <div className="popup__content_type_image">
          <img src="" alt="" className="popup__image" />
          <img src="" alt="" className="popup__close" />
        </div>
      </div>
    </div>
  );
}

export default App;
