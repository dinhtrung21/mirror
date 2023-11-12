import { SendOutlined } from '@ant-design/icons';
import { useState } from 'react';

interface PromptInputProps {
  handleSearch: (kw: string) => any;
}

const PromptInput = (props: PromptInputProps) => {
  const { handleSearch } = props;
  const [keyword, setKeyword] = useState('');

  const handleSendButton = () => {
    if (!keyword) return;
    const searchKw = keyword.trim();
    setKeyword('');
    handleSearch(searchKw);
  };

  return (
    <>
      <div className="flex items-center relative mt-6">
        <input
          className="border-[#2ca0e2] placeholder:text-white bg-transparent pr-16 rounded-2xl border-2 w-full py-3 px-5"
          placeholder="Enter a prompt here"
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSendButton();
            }
          }}
          value={keyword}
        />
        <button
          onClick={handleSendButton}
          type="submit"
          className={
            `absolute right-4 top-3  rounded-full text-white  w-8 h-8 hover:text-white hover:bg-slate-900 transition flex items-center justify-center` +
            (keyword ? ' cursor-pointer' : ' cursor-not-allowed')
          }
        >
          <SendOutlined />
        </button>
      </div>
    </>
  );
};

export default PromptInput;
