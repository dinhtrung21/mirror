import { Rate } from "antd";
import { Dispatch, forwardRef } from "react";

interface ContentProps {
  content: string;
  isCurrent?: boolean;
  references?: string[];
  setRatingRef?: Dispatch<any>;
}

const MyContent = (props: ContentProps) => {
  const { content, isCurrent, references, setRatingRef } = props;

  return (
    <>
      <div className="bg-white text-black p-6 rounded-2xl answer-content">
        <p dangerouslySetInnerHTML={{ __html: content }}></p>
      </div>

      {isCurrent && (
        <div className="text-sm mt-4">
          <div className="font-bold text-xs mb-2">Sources</div>
          <ol className="sources text-xs text-gray-300">
            {references?.map((i, idx) => (
              <li key={idx}>Credible sources: CRU, 2023</li>
            ))}
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
