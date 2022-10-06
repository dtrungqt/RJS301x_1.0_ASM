import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="loginpage-container">
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form>
          <label>
            Full Name <input type="text" />
          </label>
          <label>
            Email <input type="text" />
          </label>
          <label>
            Password <input type="text" />
          </label>
          <label>
            Phone <input type="text" />
          </label>
          <button type="submit">SIGN UP</button>
        </form>
        <h4>
          Login?{" "}
          <span>
            <Link>Click</Link>
          </span>
        </h4>
      </div>
    </div>
  );
};
export default LoginPage;
