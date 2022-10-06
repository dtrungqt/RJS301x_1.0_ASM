import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="loginpage-container">
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form>
          <label>
            Email <input type="text" />
          </label>
          <label>
            Password <input type="text" />
          </label>
          <button type="submit">SIGN IN</button>
        </form>
        <h4>
          Create an account?
          <span>
            <Link>Click</Link>
          </span>
        </h4>
      </div>
    </div>
  );
};
export default RegisterPage;
