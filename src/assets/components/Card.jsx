export default function Card({ card, handleClick }) {
  return (
    <>
      <div className="card p-0 m-2">
        <img
          src="https://placehold.co/600x400"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{card.title}</h5>
          <p className="card-text flex-grow-1">{card.content}</p>
          <button
            className="btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#deleteModal"
          >
            Delete
          </button>

          <div className="modal fade" id="deleteModal" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-1 text-danger fw-bold">
                    Deleting...
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body fs-5 fw-semibold">
                  <span className="fw-bolder"> {card.title}</span>
                  <p className="text-danger fw-bolder">
                    This Post will be Erased Permantly!
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-success"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleClick(card.id)}
                    data-bs-dismiss="modal"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
