import "./modal.css";
import { FC } from "react";
import { TodoCheckbox } from "../todo-checkbox/todo-checkbox";
import { TaskEntity } from "../../types/data";

interface ModalProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  task: TaskEntity;
}

export const Modal: FC<ModalProps> = (props: ModalProps) => {
  return (
    <>
      <div
        className={props.active ? "modal__overlay active" : "modal__overlay"}
      ></div>
      <div className={props.active ? "modal active" : "modal"}>
        <div className="modal__content">
          <header className="modal__header">
            <div className="modal__info">
              <h3 className="modal__name">{props.task.name}</h3>
              <div className="modal__date">{props.task.date}</div>
            </div>
            <TodoCheckbox />
          </header>
          <div className="modal__full-description">{props.task.fullDesc}</div>
          <button
            className="modal__button"
            onClick={(e) => {
              e.stopPropagation();
              props.setActive(false);
            }}
          >
            Готово
          </button>
        </div>
      </div>
    </>
  );
};
