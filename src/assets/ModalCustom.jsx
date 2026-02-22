
const DeleteContactModal = ({ show, proceed, contactName }) => {
  if (!show) return null;

  return (
    <>
      <div 
        className="modal-backdrop fade show" 
        style={{ display: 'block' }}
      ></div>
      
      <div 
        className="modal fade show" 
        style={{ display: 'block', backgroundColor: 'transparent' }}
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-dark text-light">
            
            <div className="modal-header border-0">
              <h5 className="modal-title text-danger">Delete Contact</h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                onClick={() => proceed(false)}
              ></button>
            </div>

            <div className="modal-body">
              <p className="mb-0">
                Do you want to delete the  <span className="text-warning fw-bold mx-1">{contactName}</span> contact?
              </p>
            </div>

            {/* فوتر مودال با دکمه‌ها */}
            <div className="modal-footer border-0">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => proceed(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => proceed(true)}
              >
                Yes Delete it
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteContactModal;