interface QuestionProps {
  question: string;
}

const Question = (props: QuestionProps) => {
  const { question } = props;
  return (
    <div className="my-4">
      <p>{question}</p>
    </div>
  );
};

export default Question;
