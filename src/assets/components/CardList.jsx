import Card from "./Card";

export default function CardList({ cardList, handleClick }) {
  return (
    <>
      <div className="post-container text-light row">
        {cardList
          .filter((card) => card.isPublic)
          .map((card) => (
            <Card key={card.id} card={card} handleClick={handleClick} />
          ))}
      </div>
    </>
  );
}
