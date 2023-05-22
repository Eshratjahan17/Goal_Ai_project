import React from "react";

const Chatbot = () => {
  return (
    <div className="w-full ">
      <h1 className="text-2xl font-bold text-primary text-center py-10 ">
        SJI Chatbot
      </h1>
      <div className="form-control ml-20 ">
        <div className="input-group ">
          <input
            type="text"
            placeholder="Search…"
            className="input input-bordered w-10/12  "
          />
          <button className="btn btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div>
        <div className="chat chat-start w-full">
          <div className="chat-bubble w-8/12 mx-10 my-5 ">
            It's over Anakin, <br />I have the high ground.
          </div>
        </div>
        <div className="chat chat-end  ">
          <div className="chat-bubble w-8/12 mx-10 my-5 bg-red-200">
            You underestimate my power!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
