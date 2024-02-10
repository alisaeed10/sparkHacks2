"use client"
import { use, useEffect, useState } from "react";
import './motivation.css';

const openAi = process.env.OPEN_AI_API_KEY;
export function QuoteGenerator() {
    console.log(openAi);
    const [quote, setQuote] = useState("");
    useEffect(() => {
        const generateQuote = async () => {
            const res = await fetch("https://api.openai.com/v1/chat/completions",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${openAi}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                message: [{role: "system", content: "give me a quote that will help a person get positively motivated to go to the gym. keep it one sentence long."}]
            })   
            })
            const data = await res.json();
            setQuote(data.content);
            console.log(data.content);
        }
        generateQuote();
    }, []);
  return (
    <div className="quote-conatiner">
      <p className="quote">hello {quote}</p>
    </div>
  );
}