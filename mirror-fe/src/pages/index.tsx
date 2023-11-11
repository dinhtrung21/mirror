'use client';

import Image from 'next/image';
import { Inter } from 'next/font/google';
import { SendOutlined } from '@ant-design/icons';
import { useAsyncFn } from 'react-use';
import { useEffect, useRef, useState } from 'react';
import Spinner from './spinner';
import PromptInput from './promptInput';
import Content from './content';
import Question from './question';
import Landing from './landing';

const inter = Inter({ subsets: ['latin'] });

type ResponseData = {
  q: string;
  a: string;
};

export default function Home() {
  const result =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nunc vitae lacinia lacinia, nisl nunc lacinia nunc, vitae lacinia nunc nisl vit';

  const [currentPrompt, setCurrentPrompt] = useState<ResponseData | null>(null);

  const [oldPrompt, setOldPrompt] = useState<ResponseData[]>([]);

  const handleSearch = (qs: string) => {
    // Put current prompt to old prompt

    if (currentPrompt) {
      console.log('currentPrompt >> ', currentPrompt);
      setOldPrompt((o) => [currentPrompt, ...o]);
    }

    setCurrentPrompt({
      q: qs,
      a: '',
    });

    cb();
  };

  const fetchAPI = async (): Promise<any> => {
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ result });
      }, 2000);
    });
  };

  const [state, cb] = useAsyncFn(fetchAPI);

  useEffect(() => {
    console.log('state.value >> ', state.value);
    if (state.value) {
      setCurrentPrompt({
        a: state.value?.result as string,
        q: currentPrompt?.q!,
      });
    }
  }, [state.value]);

  return (
    <main className={`${inter.className}`}>
      <div className="gradient-bg">
        <div className="flex min-h-screen flex-col items-center justify-center xl:px-24 ">
          <div className=" min-h-[90vh] py-8 px-4 xl:px-20 xl:py-16 relative z-1 bg-[#18296c] w-full max-w-[800px]  xl:rounded-3xl text-white flex flex-col justify-between">
            <div className="overflow-auto  xl:h-[600px] xl:max-h-[600px] h-[80vh]">
              <div className="current-prompt overflow-auto">
                {currentPrompt?.q && <Question question={currentPrompt.q} />}
                {currentPrompt?.a && <Content isCurrent content={currentPrompt.a} />}
              </div>

              {!currentPrompt && <Landing />}

              {state.loading && (
                <div className="px-16 py-8  flex justify-center">
                  <Spinner />
                </div>
              )}

              <div className="all-promts ">
                {oldPrompt.map((item, idx) => {
                  return (
                    <div className="prompt__item" key={item.q + idx}>
                      <Question question={item.q} />
                      <Content content={item.a} />
                    </div>
                  );
                })}
              </div>
            </div>

            <PromptInput handleSearch={handleSearch} />
          </div>
        </div>
      </div>
    </main>
  );
}
