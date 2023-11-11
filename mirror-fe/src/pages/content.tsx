import { Rate } from 'antd';
import { Dispatch, forwardRef } from 'react';

interface ContentProps {
  content: string;
  isCurrent?: boolean;
  setRatingRef?: Dispatch<any>;
}

const MyContent = (props: ContentProps) => {
  const { content, isCurrent, setRatingRef } = props;

  return (
    <>
      <div className="bg-white text-black p-6 rounded-2xl answer-content">
        {/* <p dangerouslySetInnerHTML={{ __html: content }}></p> */}

        <p>
          In next month, there will be a 5-10% increase in 304 stainless steel in China, due to rising nickel prices
          (3), strong demand (1), and government policies (1)
        </p>

        <p>However, potential downward pressure may arise from:</p>
        <ul>
          <li>Gradual easing of supply chain disruptions, leading to increased stainless steel supply.</li>
          <li>Seasonal demand fluctuations, with a potential slight price decrease during winter months.</li>
        </ul>
        <p>
          This estimated number is for reference only. I will continue to monitor the market and provide you with
          updates.
        </p>
      </div>

      {isCurrent && (
        <div className="text-sm mt-4">
          <div className="font-bold text-xs mb-2">Sources</div>
          <ol className="sources text-xs text-gray-300">
            <li>Internal report: Deliveries report, Q3 2023</li>
            <li>Credible sources: CRU, 2023</li>
            <li>Credible sources: Nickel London Metal Exchange (LME) Nickel Cash Official</li>
          </ol>
          <div className="mt-3 flex items-center" ref={setRatingRef}>
            <p className=" text-gray-100 mr-3">Rate the answer </p>
            <Rate defaultValue={3} style={{ fontSize: 20 }} />
          </div>
        </div>
      )}
    </>
  );
};

export default MyContent;
