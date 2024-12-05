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
            onClick={() => handleClick(card.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
