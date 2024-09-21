import { Component } from "react";

import "./employees-add-form.css";

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: "",
      error: "",
    };
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      error: "",
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.name.trim() === "") {
      this.setState({ error: "Поле не может быть пустым" });
      return;
    }
    if (!isNaN(this.state.name)) {
      this.setState({ error: "Поле не может быть числом" });
      return;
    }
    if (this.state.salary.trim() === "") {
      this.setState({ error: "Поле не может быть пустым" });
      return;
    }
    this.props.onAdd(this.state.name, this.state.salary);
    this.setState({
      name: "",
      salary: "",
      error: "",
    });
  };

  render() {
    const { name, salary, error } = this.state;
    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form className="add-form d-flex" onSubmit={this.onSubmit}>
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Как его зовут?"
            name="name"
            value={name}
            onChange={this.onValueChange}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="З/П в $?"
            name="salary"
            value={salary}
            onChange={this.onValueChange}
          />

          <button type="submit" className="btn btn-outline-light">
            Добавить
          </button>
        </form>
        <p id="error-message">{error}</p>
      </div>
    );
  }
}

export default EmployeesAddForm;
