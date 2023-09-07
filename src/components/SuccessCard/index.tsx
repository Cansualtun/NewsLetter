const SuccessCard = () => {
  return (
    <div className="bg-white rounded-3xl p-10 container">
      <div className="grid items-center gap-5 max-h-full responsive:flex-row">
        <img src="/assets/check.svg" alt="icon" className="w-16" />
        <h1 className="text-5xl font-bold mb-3 items-start">
          Thanks for
          <br /> subscribing!
        </h1>
        <p>
          A confirmation email has been sent to
          <br /> <b>ash@loremcompany.com.</b> Please open it and click
          <br /> the button inside to confirm your subscription.
        </p>
        <button
          type="submit"
          className="text-white bg-slate-800 hover:bg-gradient-to-b hover:from-[#FF6A3A] hover:to-[#FF527B] focus:outline-none focus:ring-4 font-bold focus:ring-blue-300 rounded-md text-sm w-full p-2.5 mt-4 text-center mr-2 mb-2 h-12 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Dismiss Message
        </button>
      </div>
    </div>
  );
};
export default SuccessCard;
