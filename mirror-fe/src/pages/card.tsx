interface LandingCardProps {
  topic: string;
  keyword: string;
}

const LandingCard = (props: LandingCardProps) => {
  const { topic, keyword } = props;
  return (
    <div className="card-item bg-blue-700 p-8 rounded-lg cursor-pointer xl:h-32">
      <h6 className="font-bold text-lg">{topic}</h6>
      <p className="mt-2"> {keyword} </p>
    </div>
  );
};

export default LandingCard;
