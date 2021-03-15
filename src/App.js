import React from "react";
import logo from "./assets/images/npmlogo.png";
import bear from "./assets/images/bear.png";
import Input from "./components/input/Input.component";
import "./App.scss";

import axios from "axios";

class App extends React.Component {
    state = {};
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const response = axios.post("http://localhost:5000/users", this.state);

        response.then((result) => {
            console.log(result);
        });
    };

    componentDidMount() {
        const response = axios.get("http://localhost:5000/posts/2");
    }

    render() {
        console.log(this.state);
        return (
            <div className="app">
                <img src={logo} alt="logo" className="app__logo" />
                <form className="app__form" onSubmit={this.handleSubmit}>
                    <img src={bear} className="app__image" alt="" />
                    <h1 className="app__title">Sign In</h1>
                    <Input required type="text" onChange={this.handleChange} name="username">
                        Username
                    </Input>
                    <Input required type="email" onChange={this.handleChange} name="email">
                        Email
                    </Input>
                    <Input required type="password" onChange={this.handleChange} name="password">
                        <span>Password</span>
                        <a href="#heey" className="form__link">
                            Forgot password?
                        </a>
                    </Input>
                    <button type="submit" className="form__button">
                        Sign In
                    </button>
                    <a href="#heey" className="form__link form__link--center">
                        Create Account
                    </a>
                </form>
            </div>
        );
    }
}

export default App;
