import React from "react";
import style from "styles.css";

class LoginButton extends React.Component {
  render() {
    return <button onClick={this.props.onClick}>Login</button>;
  }
}

class LogoutButton extends React.Component {
  render() {
    return <button onClick={this.props.onClick}>Logout</button>;
  }
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      username: "",
      password: "",
    };
  }

  handleLogin = () => {
    const { username, password } = this.state;

    // Kiểm tra tên người dùng và mật khẩu ở đây. Ví dụ:
    if (username === "admin" && password === "admin") {
      this.setState({
        isLoggedIn: true,
      });
    } else {
      alert("Invalid username or password");
    }
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      username: "",
      password: "",
    });
  };

  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    const { isLoggedIn, username, password } = this.state;
    const { hidden } = this.props;

    if (hidden) return null;

    return (
      <div className="login-control">
        {isLoggedIn ? (
          <div>
            <p>Welcome, {username}!</p>
            <LogoutButton onClick={this.handleLogout} />
          </div>
        ) : (
          <div className="wrapper">
            <div className="form-box login">
              <h1>Welcome Back!</h1>
              <form id="login-form" onSubmit={this.handleSubmit}>
                <div className="input-box">
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={this.handleInputChange}
                  />
                  <label>Username</label>
                </div>
                <div className="input-box">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={this.handleInputChange}
                  />
                  <label>Password</label>
                </div>
                {/* <div className="remember-forgot">
                  <label>
                    <input
                      type="checkbox"
                      name="rememberMe"
                      checked={rememberMe}
                      onChange={this.handleInputChange}
                    />
                    Remember me
                  </label>
                  <a href="forgerpass.html">Forget Password</a>
                </div> */}
                <button type="submit" className="btn" id="btn-login">
                  LOGIN
                </button>
                <div className="login-register">
                  <p>
                    Don't have an account?
                    <a href="./register.html" className="register-link">
                      Register
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default LoginControl;
