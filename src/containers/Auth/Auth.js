import React, { Component } from "react";
import classes from "./Auth.module.css"
import { Button } from "../../components/UI/Button/Button";

export class Auth extends Component {
  render() {
    return(
      <div className={classes.Auth}>
        <div>
          <h1>Авторизация</h1>

          <form action="">
            <input type="text"/>
            <input type="text"/>
            <Button></Button>
          </form>
        </div>
      </div>
    )
  }
}