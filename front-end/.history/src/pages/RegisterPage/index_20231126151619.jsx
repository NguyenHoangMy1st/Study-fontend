import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "./style.scss";

export default function RegisterPage() {
  const [password, setPassword] = useState("");
  console.log(password);
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState({
    length: false,
    upper: false,
    number: false,
    special: false,
  });
  const navigate = useNavigate();

  useEffect(() => {
    const handleInput = (e) => {
      const value = e.target.value;

      if (!value) {
        setPasswordValidation({
          length: false,
          upper: false,
          number: false,
          special: false,
        });
        return;
      }

      setPasswordValidation({
        length: value.length >= 8,
        upper: /[A-Z]/.test(value),
        number: /[0-9]/.test(value),
        special: /[$@%^&*()}{[\]}!]/.test(value),
      });
    };

    const passwordInput = document.querySelector("#password");
    if (passwordInput) {
      passwordInput.addEventListener("input", handleInput);
    }

    return () => {
      if (passwordInput) {
        passwordInput.removeEventListener("input", handleInput);
      }
    };
  }, []);

  const handleSubmit = async () => {
    if (!password || !lastName || !firstName || !phone || !email) {
      toast.error("Please fill in all required fields");
      return;
    }

    const isPasswordValid =
      passwordValidation.length &&
      passwordValidation.upper &&
      passwordValidation.number &&
      passwordValidation.special;

    if (!isPasswordValid) {
      toast.error("Password does not meet the requirements");
      return;
    }

    try {
      const formData = {
        password,
        lastName,
        firstName,
        phone,
        email,
      };
      const response = await axios.post(
        "https://pbl6-shoes-shop-production-810a.up.railway.app/auth/signup",
        formData
      );
      if (response) {
        toast.success("Đăng ký thành công");
        localStorage.setItem("user", JSON.stringify(formData));

        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (error) {
      toast.error(error?.message);
    }
  };

  const handleInput = (event) => {
    console.log(123123);
    console.log(event);
    console.log(event.target);
    setPassword(event.target.value);
  };
  return (
    <div className="register-control body-register ">
      <ToastContainer />
      <div className="wrapper-register">
        <div className="form-box register">
          <h2>Register</h2>
          <form>
            <div className="input-register">
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
              <label>Email</label>
            </div>
            <div className="input-register">
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                required
              />
              <label>Last name</label>
            </div>
            <div className="input-register">
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                required
              />
              <label>First name</label>
            </div>
            <div className="input-register">
              <input
                type="number"
                id="phone"
                name="phone"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                required
              />
              <label>Phone Number</label>
            </div>
            <div className="input-register">
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(event) => handleInput(event)}
                // onFocus={() => setIsPasswordFocused(true)}
                // onBlur={() => setIsPasswordFocused(false)}
                // required
              />
              <label>Password</label>
            </div>
            <div
              className={`check-items ${
                isPasswordFocused ? "visible" : "hidden"
              }`}
            >
              <div
                className={`check-item check-length ${
                  passwordValidation.length ? "active" : "unactive"
                }`}
              >
                At least 8 characters
              </div>
              <div
                className={`check-item check-upper ${
                  passwordValidation.upper ? "active" : "unactive"
                }`}
              >
                At least one uppercase letter
              </div>
              <div
                className={`check-item check-number ${
                  passwordValidation.number ? "active" : "unactive"
                }`}
              >
                At least one number
              </div>
              <div
                className={`check-item check-special ${
                  passwordValidation.special ? "active" : "unactive"
                }`}
              >
                At least one special character
              </div>
            </div>
            <div className="input-register">
              <select className="permission">
                <option value="0">Sell</option>
                <option value="1">Purchase</option>
              </select>
            </div>
            <button
              className="btn-register"
              type="button"
              onClick={handleSubmit}
              id="btn-login"
            >
              REGISTER
            </button>
            <div className="login-register">
              <p>
                If you already have an Account?
                <Link to="/login" className="login-link">
                  {" "}
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
