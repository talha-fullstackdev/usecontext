const Rotation = () => {
  const cards = [
    {
      cardImg: "",
      name: "ABC",
      des: "abcds",
    },
    {
      cardImg: "",
      name: "ABC",
      des: "abcds",
    },
    {
      cardImg: "",
      name: "ABC",
      des: "abcds",
    },
    {
      cardImg: "",
      name: "ABC",
      des: "abcds",
    },
    {
      cardImg: "",
      name: "ABC",
      des: "abcds",
    },
    {
      cardImg: "",
      name: "ABC",
      des: "abcds",
    },
    {
      cardImg: "",
      name: "ABC",
      des: "abcds",
    },
    {
      cardImg: "",
      name: "ABC",
      des: "abcds",
    },
    {
      cardImg: "",
      name: "ABC",
      des: "abcds",
    },
    {
      cardImg: "",
      name: "ABC",
      des: "abcds",
    },
    {
      cardImg: "",
      name: "ABC",
      des: "abcds",
    },
    {
      cardImg: "",
      name: "ABC",
      des: "abcds",
    },
    {
      cardImg: "",
      name: "ABC",
      des: "abcds",
    },
    {
      cardImg: "",
      name: "ABC",
      des: "abcds",
    },
    {
      cardImg: "",
      name: "ABC",
      des: "abcds",
    },
  ];

  return (
    <main>
      <div className="">
        {cards.map((card) => {
          <div className="">
            <img src={card.cardImg} alt="card-img" />
            <h1>{card.name}</h1>
            <p>{card.des}</p>
          </div>;
        })}
      </div>
    </main>
  );
};

export default Rotation;
