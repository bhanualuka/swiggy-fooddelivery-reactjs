const Contact = () => {
  return (
    <div>
      <h1 className=" font-bold text-5xl text-black m-4  p-4 ">Contact Page</h1>

      <div>
        <form>
          <input
            type="text"
            placeholder="name"
            className="border border-black p-3  rounded-sm  m-2"
          />
          <input
            type="text"
            placeholder="Message"
            className="border border-black p-3  rounded-sm  m-2"
          />
          <button className="border border-black m-3  text-xl font-bold w-28 rounded-md">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
