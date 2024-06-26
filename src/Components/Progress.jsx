export default function Progress() {
  const donations = [
    {
      amount: 250,
      caption: "You really need this. Really.",
      id: 1,
      name: "Jo",
    },
    {
      amount: 30,
      caption: "Here, take a break from work!",
      id: 2,
      name: "Rami",
    },
    {
      amount: 20,
      caption: "LOL! You are too funny. Happy to do this for you. :)",
      id: 3,
      name: "Michelle",
    },
    {
      amount: 5,
      caption: "Have fun!",
      id: 4,
      name: "Malinda",
    },
    {
      amount: 30,
      caption: "Come visit me in Miami!",
      id: 5,
      name: "Sam",
    },
  ];

  const money = donations.reduce((acc,currVal) =>{
    acc += currVal.amount
    return acc;
  },0);

  return (
    
    <section className="progress">
      <h2>
        Raised <span className="secondary">${money}</span> of
        <span className="secondary">$1000</span>
      </h2>
    </section>
  )
}
