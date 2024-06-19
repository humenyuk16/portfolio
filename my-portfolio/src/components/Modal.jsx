import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

const Modal = ({ isOpen, onRequestClose, title, message }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="mb-4">{message}</p>
        <button
          onClick={onRequestClose}
          className="bg-bg-color text-white px-4 py-2 rounded-lg hover:bg-text-color"
        >
          Close
        </button>
      </div>
    </ReactModal>
  );
};

export default Modal;
