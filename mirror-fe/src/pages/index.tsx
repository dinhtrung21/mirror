'use client';

import { Inter } from 'next/font/google';
import { useAsyncFn } from 'react-use';
import { useEffect, useState } from 'react';
import Spinner from './spinner';
import PromptInput from './promptInput';
import Content from './content';
import Question from './question';
import Landing from './landing';
import axios from 'axios';

const inter = Inter({ subsets: ['latin'] });

type ResponseData = {
  q: string;
  a: string;
};

export default function Home() {
  const [currentPrompt, setCurrentPrompt] = useState<ResponseData | null>(null);

  const [oldPrompt, setOldPrompt] = useState<ResponseData[]>([]);
  const [ratingRef, setRatingRef] = useState<any>(null);
  const [references, setRefs] = useState<any>([]);

  const handleSearch = (qs: string) => {
    if (currentPrompt) {
      setOldPrompt((o) => [...o, currentPrompt]);
    }

    setCurrentPrompt({ q: qs, a: '' });
    cb(qs);
  };

  const fetchAPI = async (kw: string): Promise<any> => {
    return await axios.post('https://mirror-be.onrender.com/api/chatbot', {
      message: kw,
    });
  };

  const [state, cb] = useAsyncFn(fetchAPI);

  useEffect(() => {
    if (state.value) {
      setCurrentPrompt({
        a: state.value?.data?.answer as string,
        q: currentPrompt?.q!,
      });

      setRefs(state.value?.data?.references);
    }
  }, [state.value]);

  useEffect(() => {
    if (ratingRef) {
      setTimeout(() => {
        ratingRef.scrollIntoView({ behavior: 'smooth' });
      }, 1500);
    }
  }, [ratingRef]);

  return (
    <main className={`${inter.className}`}>
      <div className="gradient-bg">
        <div className="flex min-h-screen flex-col items-center justify-center xl:px-24 ">
          <div className=" min-h-[90vh] py-8 px-8 xl:px-20 xl:py-16 relative z-1 bg-[#18296c] w-full max-w-[800px]  xl:rounded-3xl text-white flex flex-col justify-between">
            <div className="overflow-auto  xl:h-[600px] xl:max-h-[600px] h-[80vh]">
              <div className="all-promts ">
                {oldPrompt.map((item, idx) => {
                  return (
                    <div className="prompt__item" key={item.q + idx}>
                      <Question question={item.q} />
                      <Content content={item.a} references={references} />
                    </div>
                  );
                })}
              </div>

              <div className="current-prompt overflow-auto">
                {currentPrompt?.q && <Question question={currentPrompt.q} />}
                {currentPrompt?.a && (
                  <Content setRatingRef={setRatingRef} isCurrent content={currentPrompt.a} references={references} />
                )}
              </div>

              {!currentPrompt && <Landing handleSearch={handleSearch} />}

              {state.loading && (
                <div className="px-16 py-8  flex justify-center">
                  <Spinner />
                </div>
              )}
            </div>

            <PromptInput handleSearch={handleSearch} />
          </div>
        </div>
      </div>
    </main>
  );
}
