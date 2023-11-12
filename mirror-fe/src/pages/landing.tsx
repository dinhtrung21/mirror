import LandingCard from './card';

interface LandingProps {
  handleSearch: (query: string) => void;
}

const Landing = (props: LandingProps) => {
  const { handleSearch } = props;

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

  const questions = [
    'Tell me the trend of the price of a stainless steel bd316 in the China next year',
    'How the price of a stainless steel cr304 over the next 3 months?',
    'How the price of nickel fluctuates in next 10 days?',
    'How the price of a stainless steel cr32 fluctuates in next 10 days?',
  ];

  const handleSample = (q: string) => {
    handleSearch(q);
  };

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

      <div>
        <h6 className="mt-4">Sample questions</h6>
        {questions.map((q, idx) => {
          return (
            <div key={idx} className="p-2" onClick={() => handleSample(q)}>
              <div className="bg-white cursor-pointer text-black p-4 rounded-2xl answer-content hover:bg-sky-100 transition">
                {q}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Landing;
