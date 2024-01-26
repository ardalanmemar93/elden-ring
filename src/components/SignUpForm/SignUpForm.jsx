import { Component } from 'react';
import { signUp } from '../../utilities/users-service';

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const {name, email, password} = this.state;
      const formData = {name, email, password};
      // The promise returned by the signUp service
      // method will resolve to the user object included
      // in the payload of the JSON Web Token (JWT)
      const user = await signUp(formData);
      this.props.setUser(user);
    } catch {
      // An error occurred
      // Probably due to a duplicate email
      this.setState({ error: 'Sign Up Failed - Try Again' });
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div className="h-screen">
        <div className="w-full max-w-md">
          <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4 form-container" autoComplete="off" onSubmit={this.handleSubmit}>
            <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
    
            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
    
            <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
    
            <label className="block text-white text-sm font-bold mb-2" htmlFor="confirm">
              Confirm
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
              type="password"
              name="confirm"
              value={this.state.confirm}
              onChange={this.handleChange}
              required
            />
    
            <button
              className={`bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded focus:outline-none focus:shadow-outline`}
              type="submit"
              disabled={disable}
            >
              SIGN UP
            </button>
          </form>
    
          <p className="text-red-500 text-xs italic error-message">&nbsp;{this.state.error}</p>
        </div>
      </div>
    );
    
  }
}