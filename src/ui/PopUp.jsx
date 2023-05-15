export default function PopUp({ show, children, onClose }) {
  function handleClosePopup(e) {
    if (e.target === e.currentTarget || e.target.tagName === 'IMG') {
      onClose();
      e.stopPropagation();
    }
  }
  return show ? (
    <div className="popup" onClick={(e) => handleClosePopup(e)}>
      <div className="popup-inner">
        <button type="submit" className="closePopupButton" onClick={(e) => handleClosePopup(e)}>
          <img src="./public/Close.svg" alt="Close" />
        </button>
        {children}
      </div>
    </div>
  ) : '';
}
