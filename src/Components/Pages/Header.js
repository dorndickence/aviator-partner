import Cookies from "js-cookie";

const Header = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>

        <div className="navbar-end">
          <div className="flex gap-5">
            {Cookies.get("token") ? (
              <>
                <div className="gap-5 hidden md:flex">
                  <a href="./account" className="btn glass">
                    Account
                  </a>
                </div>
              </>
            ) : (
              <>
                <a href="./login" className="btn glass">
                  Login
                </a>
                <a href="./register" className="btn glass">
                  Register
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
