const Home = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">MAKE MONEY WITH US</h1>
            <p className="mb-5">
              Introduce new users to our game and Get up to 40% commission for
              customers introduced
            </p>
            <button className="btn btn-primary">REGISTRATION</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
