import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";


export default function LoginComponent() { 
    return( 
        <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
        <div className="w-100 d-flex flex-column p-4">
          <h1 className="d-flex justify-content-center">Авторизация</h1>
          <p className="d-flex text-medium-emphasis justify-content-center">
            Войти в аккаунт
          </p>
          <InputGroup className={"mb-3"}>
            <InputGroup.Text id="btnGroupAddon">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Введите логин"
              aria-label="Введите логин"
              aria-describedby="btnGroupAddon"
            />
          </InputGroup>
          <InputGroup className={"mb-4"}>
            <InputGroup.Text id="btnGroupAddon">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Введите пароль"
              aria-label="Введите пароль"
              aria-describedby="btnGroupAddon"
            />
          </InputGroup>
          <Button
            className={"w-100"}
            variant="primary"
          >
            Войти
          </Button>
        </div>
      </div>
    )
};