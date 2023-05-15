export default function PopUp({ show, children, onClose }) {
  function handleClosePopup(e) {
    if (e.target.classList.contains('can-close-popup')) {
      onClose();
      e.stopPropagation();
    }
  }
  return show ? (
    <div className="popup can-close-popup" onClick={(e) => handleClosePopup(e)}>
      <div className="popup-inner">
        <button type="submit" className="closePopupButton can-close-popup" onClick={(e) => handleClosePopup(e)}>
          <img className="can-close-popup" src="/Close.svg" alt="Close" />
        </button>
        {children}
      </div>
    </div>
  ) : '';
}
