import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "./style.scss";

export default function RegisterPage() {
  const [password, setPassword] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const naviagte = useNavigate();
  const validateEmail = (email) => {
    // Biểu thức chính quy kiểm tra định dạng email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleSubmit = async () => {
    if (!password || !lastName || !firstName || !phone || !email) {
      toast.error("Please fill in all required fields");
      return;
    }
    // Kiểm tra định dạng email
    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address");
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
          naviagte("/login");
        }, 2000);
      }
    } catch (error) {
      toast.error(error?.message);
    }
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
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
              <label>Password</label>
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
