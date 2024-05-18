import React from "react";
import "../../styles/find-car-form.css";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";

const FindCarForm = () => {
  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input type="text" placeholder="Do endereço" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="text" placeholder="Seu endereço" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="date" placeholder="Data de jornada" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            className="journey__time"
            type="time"
            placeholder="Tempo de uso"
            required
          />
        </FormGroup>
        <FormGroup className="select__group">
          <select>
            <option value="ac">AC Car</option>
            <option value="non-ac">Non AC Car</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <button className="btn find__car-btn">Encontre</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;