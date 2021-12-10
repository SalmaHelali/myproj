import { useDispatch } from "react-redux";
import { delTask, taskdone } from "../Redux/Action";
import Edit from "./Edit";
import {Card} from "react-bootstrap";

const Task = ({el}) => {
  const dispatch = useDispatch()
    return (
      <div className="cardSection">
        <ul>
          
            <Card
              style={{
                width: "55rem",
                height: "10rem",
                background: "rgba(219, 255, 255, 0.741)",
                boxShadow: "rgb(241, 189, 189) 0px 20px 30px -10px"
              }}
            >
              <Card.Body>
                <Card.Title>TASK</Card.Title>
                <h2>{el.task}</h2>
                <div className="btn29-func">
                  <button
                    onClick={() => dispatch(delTask(el.id))}
                    className="button-29"
                  >
                    DELETE
                  </button>
                  <button
                    style={{
                      textDecoration: el.done && "line-through",
                      color: "black",
                    }}
                    onClick={() => dispatch(taskdone(el.id))}
                    className="button-29"
                  >
                    {el.done ? "UNDONE" : "DONE"}
                  </button>
                  <Edit el={el}></Edit>
                </div>
              </Card.Body>
            </Card>
          
        </ul>
      </div>
    );
}

export default Task

