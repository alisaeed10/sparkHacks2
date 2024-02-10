/* eslint-disable react/no-unescaped-entities */
"use client"
import { use, useEffect, useState } from "react";
import './motivation.css';
import OpenAI from 'openai';
import time from  'console';


export function QuoteGenerator() {
    const apiKey = process.env.NEXT_PUBLIC_NINJAS_API_KEY;
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('X-Api-Key', apiKey || ''); 
    const timed = () => {
        console.log("timed");
    }
    const generateQuote = async () => {
        try {
            const res = await fetch("https://api.api-ninjas.com/v1/quotes?category=fitness", {
                    method: 'GET',
                    headers: headers
            });
                const data = await res.json();
                if (data.content !== null) {
                    
                    setQuote(data[0].quote);
                    setAuthor(data[0].author);
                }
                else {
                    setQuote("I'm sorry, I couldn't find a quote for you");
                }
                console.log("the data ", data);
            } catch (error) {
                console.log("error ", error);
            }
        };
    useEffect(() => {
        generateQuote();
    },[]);

            
  return (
    <div className="quote-container">
      <p className="quote" >"{quote}" by: {author}
        </p>
      <button className='next-quote'onClick={() => generateQuote()}>next quote</button>
    </div>
  );
}