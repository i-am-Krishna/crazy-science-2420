import React from "react";
import styles from '../../styles/signin.module.css'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate , useLocation, Link } from "react-router-dom";
import { login } from "../../Redux/Auth/action";
import { LOGIN_SUCCESS } from "../../Redux/Auth/actionTypes";
const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const location = useLocation();
  const comingFrom = location.state?.from?.pathname || "/";


  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(login({ email, password })).then((r) => {
        if (r.type === LOGIN_SUCCESS) {
          localStorage.setItem("cartId",r.payload.user._id)
          navigate(comingFrom, { replace: true });
        }
      });
    }
  };

    return (
      <div>
        <div id={styles.main}>
          <h1>Login</h1>
          <div id={styles.facebook}>
            <div>
              <img
                src="data:image/jpeg;base64,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"
                alt=""
              />
            </div>
            <div>
              <p>Continue with Facebook</p>
            </div>
          </div>
          <div id={styles.google}>
            <div>
              <img
                src="data:image/png;base64,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"
                alt=""
              />
            </div>
            <div>
              <p>Google</p>
            </div>
          </div>
          <div id={styles.amazon}>
            <div>
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/31GRWfYU1hL.png"
                alt=""
              />
            </div>
            <div>
              <p>Amazon</p>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            id={styles.email}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            id={styles.password}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p id={styles.forgotpass}>Forgot Your Password?</p>
          <input type="submit" id={styles.loginsubmit} value="Sign in" />
          <Link to={'/signup'}>
          <p id={styles.createaccount} style={{textDecoration:"none"}}>Create account</p>
          </Link>
        </form>
      </div>
    );
}

export default Signin