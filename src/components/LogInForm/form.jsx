import React from "react";

export default class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      nameError: "",
      emailError: "",
      send: false,
      errors: []
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.validate()) {
      this.setState({ send: true });
    }
  }

  validate() {
    let nameError = "";
    let emailError = "";
    let errors = [];

    if (this.state.name.length < 2 && this.state.name.indexOf(" ") === -1) {
      nameError = "Your login is not correct!";
      errors.push(nameError);
    }
    if (this.state.email.length < 3 && this.state.email.indexOf("@") === -1) {
      emailError = "Your email is not correct!";
      errors.push(emailError);
    }
    this.setState({ nameError, emailError });
    console.log(errors);
    return errors.length === 0;
  }

  render() {
    const form = (
      <form onSubmit={e => this.handleSubmit(e)}>
        <div>
          <div>
            <div className="col-6 name">
              <label>
                <span>Your login</span>
                <br />
                <input
                  type="text"
                  placeholder="Teresa"
                  name="name"
                  value={this.state.name}
                  onChange={e => this.handleChange(e)}
                />
                <br />
              </label>
              <div>{this.state.nameError}</div>
            </div>

            <div>
              <label>
                <span>Your email</span>
                <br />
                <input
                  type="email"
                  placeholder="abc@xyz.pl"
                  name="email"
                  value={this.state.email}
                  onChange={e => this.handleChange(e)}
                />
                <br />
              </label>
              <div>{this.state.emailError}</div>
            </div>
          </div>

          <div>
            <button type="submit">Log in</button>
          </div>
        </div>
      </form>
    );

    return <>{this.state.send ? <>Welcome User :)</> : form}</>;
  }
}

//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "",
//       email: "",
//       errors: [],
//       isSignedIn: false
//     };
//   }

//   handleChange(e) {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   }

//   handleSubmit(e) {
//     e.preventDefault();

//     if (this.validate()) {
//       this.setState({ isSignedIn: true });
//     }
//   }

//   validate() {
//     const errors = [];

//     if (this.state.name.length < 2 && this.state.name.indexOf(" ") === -1) {
//       errors.push("Podany login jest nieprawidłwy!");
//     }
//     if (this.state.email.length < 3 && this.state.email.indexOf("@") === -1) {
//       errors.push("Podany email jest nierpawidłowy!");
//     }

//     this.setState({ errors });
//     return errors.length === 0;
//   }

//   render() {
//     const form = (
//       <form onSubmit={e => this.handleSubmit(e)}>
//         Login:{" "}
//         <input
//           type="text"
//           name="name"
//           value={this.state.name}
//           onChange={e => this.handleChange(e)}
//         />
//         <br />
//         Email:{" "}
//         <input
//           type="email"
//           name="email"
//           value={this.state.mail}
//           onChange={e => this.handleChange(e)}
//         />
//         <br />
//         <button type="submit">Log in</button>
//       </form>
//     );

//     const podsumowanie = <h2 style={{ color: "green" }}>Welcome user :)</h2>;

//     return (
//       <div>
//         <ul>
//           {this.state.errors.map((error, index) => (
//             <li key={index}>{error}</li>
//           ))}
//         </ul>
//         {this.state.isSignedIn ? (
//           <>
//             {podsumowanie} {form}{" "}
//           </>
//         ) : (
//           form
//         )}
//       </div>
//     );
//   }
// }
