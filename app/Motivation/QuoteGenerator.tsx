"use client"
import { use, useEffect, useState } from "react";
import './motivation.css';
import OpenAI from 'openai';


export function QuoteGenerator() {
    const apiKey = process.env.NEXT_PUBLIC_OPEN_AI_API_KEY;
    const openAi = new OpenAI({apiKey, timeout: 10000, dangerouslyAllowBrowser: true});
    const [quote, setQuote] = useState("");
        const generateQuote = async () => {
            try {
                const res = await openAi.chat.completions.create({
                    model: "gpt-3.5-turbo",
                    messages: [
                        {
                            role: "user",
                            content:
                                "give me a quote that will help a person get positively motivated to go to the gym. keep it one sentence long.",
                        },
                    ],
                    max_tokens: 5,
                });
                const data = await res.choices[0].message;
                if (data.content !== null) {
                    setQuote(data.content);
                }
                else {
                    setQuote("I'm sorry, I couldn't find a quote for you");
                }
                console.log("the data ", data);
            } catch (error) {
                console.log("error ", error);
            }
        }
      
  return (
    <div className="quote-container">
      <p className="quote" >hello {quote}</p>
      <button className="quote-button" onClick={() => generateQuote()}>Get a quote</button>
    </div>
  );
}