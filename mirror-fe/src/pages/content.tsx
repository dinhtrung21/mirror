import { forwardRef } from 'react';

interface ContentProps {
  content: string;
  isCurrent?: boolean;
}

const MyContent = forwardRef(function Content(props: ContentProps, ref: any) {
  const { content, isCurrent } = props;
  return (
    <>
      <div className="bg-white text-black p-6 rounded-2xl" ref={ref}>
        <p dangerouslySetInnerHTML={{ __html: content }}></p>
      </div>

      {isCurrent && (
        <>
          <div className="mt-3">
            <p className="text-sm text-gray-100">Rate the answer </p>
          </div>
        </>
      )}
    </>
  );
});

export default MyContent;
