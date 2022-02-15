import React from "react";
import classes from "./FinishedQuiz.module.css"
import { Button } from "../UI/Button/Button";
import { Link } from "react-router-dom";

export const FinishedQuiz = props => {
  const successCount = Object.keys(props.results).reduce((total,key) => {
    if (props.results[key] === 'success') {
      total++
    }

    return total
  }, 0)

  return (
    <div className={classes.FinishedQuiz}>
      <ul>
        { props.quis.map((quizItem,index) => {
          const cls = [
            'fa',
            props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
            classes[props.results[quizItem.id]]
          ]
          return (
            <li
              key={index}
            >
              <strong>{index + 1} </strong>
              {quizItem.question}
              <i className={cls.join(' ')} />
            </li>
          )
        }) }
      </ul>

      <p>Правильно {successCount} из {props.quis.length}</p>

      <div>
        <Button onClick={props.onRetry} type="primary">Повторить</Button>
        <Link to="/">
          <Button type="success">Перейти в список тестов</Button>
        </Link>
      </div>
    </div>
  )
}