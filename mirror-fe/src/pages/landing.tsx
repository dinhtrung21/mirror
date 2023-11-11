import LandingCard from './card';

const Landing = () => {
  const cards = [
    {
      topic: '📈  Trending',
      keyword: 'Innovation in the steel industry',
    },
    {
      topic: '🔮  Prediction',
      keyword: 'Forecasting stainless steel price',
    },
  ];
  return (
    <div>
      <h1 className="font-bold text-2xl"> Mirror, mirror in the hall </h1>
      <h1 className="mb-8">What do you want to know, after all ? </h1>

      <div className="grid xl:grid-cols-2 gap-6">
        {cards.map((card, idx) => {
          return (
            <div key={idx}>
              <LandingCard {...card} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Landing;
