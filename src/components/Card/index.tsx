import Form from "../Form";

const Card = () => {
  return (
    <div className="bg-[1E1E1E]">
      <div className="max-h-fit bg-white rounded-3xl p-10 container">
        <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-5 responsive:flex-row">
          <div className="space-y-4 lg:order-1 order-2">
            <h1 className="text-5xl font-bold mb-10 items-start">
              Stay updated!
            </h1>
            <p className="text-start">
              Join 60,000+ product managers receiving monthly
              <br /> updates on:
            </p>
            <ul className="space-y-3">
              <li className="flex flex-row space-x-4">
                <img src="/assets/check.svg" alt="icon" />
                <p>Product discovery and building what matters</p>
              </li>
              <li className="flex flex-row space-x-4">
                <img src="/assets/check.svg" alt="icon" />
                <p>Measuring to ensure updates are a success</p>
              </li>
              <li className="flex flex-row space-x-4">
                <img src="/assets/check.svg" alt="icon" />
                <p>And much more!</p>
              </li>
            </ul>
            <Form />
          </div>
          <img
            className="lg:order-2 order-1"
            src="/assets/card_image.svg"
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
