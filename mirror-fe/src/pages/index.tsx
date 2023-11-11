"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import { SendOutlined } from "@ant-design/icons";
import { useAsyncFn } from "react-use";
import { useEffect, useRef, useState } from "react";
import Spinner from "./spinner";
import PromptInput from "./promptInput";
import Content from "./content";
import Question from "./question";
import Landing from "./landing";
import { Rate } from "antd";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

type ResponseData = {
  q: string;
  a: string;
};

export default function Home() {
  const result =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nunc vitae lacinia lacinia, nisl nunc lacinia nunc, vitae lacinia nunc nisl vit";

  const [currentPrompt, setCurrentPrompt] = useState<ResponseData | null>(null);

  const [oldPrompt, setOldPrompt] = useState<ResponseData[]>([]);
  const [ratingRef, setRatingRef] = useState<any>(null);
  const [references, setRefs] = useState<any>([]);

  const handleSearch = (qs: string) => {
    // Put current prompt to old prompt

    if (currentPrompt) {
      console.log("currentPrompt >> ", currentPrompt);
      // setOldPrompt((o) => [currentPrompt, ...o]);
      setOldPrompt((o) => [...o, currentPrompt]);
    }

    setCurrentPrompt({
      q: qs,
      a: "",
    });

    cb(qs);
  };

  const fetchAPI = async (kw: string): Promise<any> => {
    return await axios.post("http://localhost:5000/api/chatbot", {
      message: kw,
    });
  };

  const [state, cb] = useAsyncFn(fetchAPI);

  useEffect(() => {
    console.log("state.value >> ", state.value);
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
        ratingRef.scrollIntoView({ behavior: "smooth" });
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
                      <Content content={item.a} />
                    </div>
                  );
                })}
              </div>

              <div className="current-prompt overflow-auto">
                {currentPrompt?.q && <Question question={currentPrompt.q} />}
                {currentPrompt?.a && (
                  <Content
                    setRatingRef={setRatingRef}
                    isCurrent
                    content={currentPrompt.a}
                    references={references}
                  />
                )}
              </div>

              {!currentPrompt && <Landing />}

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
