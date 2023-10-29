import { React, useState } from "react";
import Header from "../component/Header";
import OpenAI from "openai";

const Chatbot = () => {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleApiKey = async () => {
    setLoading(true);
    try {
      const openai = new OpenAI({
        apiKey: import.meta.env.VITE_OPENAI_API_KEY,
        dangerouslyAllowBrowser: true,
      });
      const chatCompletion = await openai.chat.completions.create({
        messages: [
          {
            role: "system",
            content:
              "You will be given a block of text, and your task is to extract a list of 10 keywords from it.",
          },
          { role: "user", content: prompt },
        ],
        model: "gpt-3.5-turbo",
        temperature: 0,
        max_tokens: 1000,
      });
      setResult(chatCompletion.choices[0].message.content);
    } catch (error) {}
    setLoading(false);
  };

  return (
    <>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-7 offset-md-3">
            <div className="card">
              <div className="card-body">
                <div className="chat-input mt-3">
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    type="text"
                    placeholder="Type Your Prompt Here"
                    className="form-control"
                    rows={4}
                  />
                  <button
                    className="btn btn-primary mt-2"
                    onClick={handleApiKey}
                  >
                    Send
                  </button>
                </div>
                {loading && (
                  <div className="container mt-5">
                    <p>loading</p>
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-12 mt-5">
              <div className="card">
                <div className="container mt-4">
                  <h2>Hasil :</h2>
                  <p>{result}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
