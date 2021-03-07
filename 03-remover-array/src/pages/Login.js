import React from 'react';
import { Link } from 'react-router-dom';
import '../css/login.css';

class Login extends React.Component {
  constructor() {
      super();

      this.state = {
          email: '',
          password: '',          
      };

      this.hundleOnChange = this.hundleOnChange.bind(this);
  }
  
  hundleOnChange({ target: { name, value }}) {
    this.setState({
        [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;
    console.log(email, password);  
    return (
      <div className="container_login">
        <form>
            <p>Login</p>
            <label>
                E-mail
                <input type="text" name="email" onChange={ this.hundleOnChange }/>    
            </label> 
            <label>
                Password
                <input type="password" name="password" onChange={ this.hundleOnChange }/>    
            </label>
            <Link to="/wallet">
                <button type="button"   
                  disabled={! password || !email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) }
                >
                  Confirmar  
                </button>           
            </Link>
        </form>
      </div>
    );
  }
}

export default Login;
