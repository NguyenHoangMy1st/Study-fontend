import React from "react";

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
          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={this.handleUsernameChange}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={this.handlePasswordChange}
            />
            <button onClick={this.handleLogin}>Login</button>
          </div>
        )}
      </div>
    );
  }
}

export default LoginControl;
