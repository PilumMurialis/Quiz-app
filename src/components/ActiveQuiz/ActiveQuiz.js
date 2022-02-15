import React from "react";
import classes from "./ActiveQuiz.module.css"
import { ANSWERLIST } from "./AnswersList/ANSWERLIST";

export const ActiveQuiz = props => (
  <div className={classes.ActiveQuiz}>
    <p className={classes.Question}>
      <span>
        <strong>{props.answerNumber}</strong>
        {props.question}
      </span>

      <small>{props.answerNumber} из { props.quizLength }</small>
    </p>

    <ANSWERLIST
      state={props.state}
      answers={props.answers}
      onAnswerClick={props.onAnswerClick}
    />
  </div>
)

