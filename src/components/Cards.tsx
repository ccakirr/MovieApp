interface CardProps {
  imgLink: string;
  cardTitle: string;
  cardText: string;
}

function Card({ imgLink, cardTitle, cardText }: CardProps) {
  return (
    <>
      <div className="card m-2" style={{ width: "18rem" }}>
        <img src={imgLink} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{cardTitle}</h5>
          <p className="card-text">{cardText}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
