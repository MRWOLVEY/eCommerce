import React from "react";

const NewsLetterBox = () => {
  const onSumbitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800 capitalize">
        subscribe now and get <span className="text-3xl text-red-600">20%</span>
        off
      </p>
      <p className="text-gray-400 mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <form className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 pl-6 border">
        <input
          type="email"
          placeholder="please enter your email"
          className="w-full sm:flex-1 outline-none "
          required
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4 uppercase"
          onSubmit={onSumbitHandler}
        >
          subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
